
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from userconnectio.models import ConnectionRequest
from userprofile.decorators import profile_setup_only
from userprofile.views import calculate_preference_match,match_counter
from datetime import date
from mutualrecommendation.RBR import rb_recommend
from partnerpreference.models import Preference
from userprofile.models import UserProfile
from users.models import CustomUser
User = get_user_model()

# Create your views here.
@login_required
def index(request):
    user = request.user
    # prefered_gender = user.preference
    if UserProfile.objects.filter(user=request.user).exists():
        print("exists")
    else:
        return render(request,'home/index.html', context={"no_profile": True})
        
    if Preference.objects.filter(user=request.user).exists():
        prefered_gender = Preference.objects.get(user=request.user).gender
        print(prefered_gender)
        allusers = User.objects.filter(gender=prefered_gender).exclude(username=request.user.username)
        print(allusers)
        return render(request,'home/index.html',{'all_profiles':allusers});
    else: 
        return render(request,'home/index.html', context={"no": True})


@login_required
def preference_based_list(request):
    if UserProfile.objects.filter(user=request.user).exists():
        if Preference.objects.filter(user=request.user).exists():
            prefered_gender = (request.user.preference.gender)
            preference_based_users = User.objects.filter(gender=prefered_gender).filter(preference__gender=request.user.gender).exclude(username=request.user.username)
            context={}
            for user in preference_based_users:
                my_match = calculate_preference_match(request,user.id)  #calculates match of my profile with other's preference          
                print(f"My profile match with {user.username}'s preference: {my_match['match']}")
                match_percentage=round((my_match['match'])/7*100)
                print(f"Match percentage:{match_percentage}")
                setattr(user,'match',match_percentage)
                user.save()

            # Jaccard Simillarity algorithm
            myusers = set(preference_based_users)

            # extra mutual collection based recom
            rb_recommended_users= set(rb_recommend(request.user,request))
            myusers.update(rb_recommended_users)
            
            all_users = User.objects.exclude(username=request.user.username)
            # my_preference = (request.user.preference.__dict__)
            my_preference = {}
            my_preference.update(request.user.preference.__dict__)
            age_from = my_preference['age_from']
            age_to=my_preference['age_to']
            for item in ['_state','id','user_id','age_from','age_to','gender']:
                my_preference.pop(item)
            my_preference_values = list(my_preference.values())
            # my_pref_value_list =[eval(value) for value in my_preference_values]
            my_pref_value_list=[]
            for item in my_preference_values:        
                my_pref_value_list += eval(item)
            print("My preference")
            print(my_pref_value_list)
            for user in preference_based_users:        
                profile = user.userr
                profile_att_dict ={}
                profile_att_dict.update(profile.__dict__)
                for item in ['_state','id','user_id','profile_id','profile_pic','slug','DOB','location','bio']:
                    profile_att_dict.pop(item)
                profile_att_values = list(profile_att_dict.values())
                print(f"{user.username}Profile atts:")
                print(profile_att_values)
                similarity=round(jaccard(my_pref_value_list,profile_att_values)*100)
                user.preference_match = similarity
                print(f"{user.username} jaccard similarity match: {similarity}")
                user_age = user.userr.get_age()
                if user_age in range(age_from,age_to+1):
                    user.preference_match += 20;
                print(f"{user.username} match after age calc: {user.preference_match}")
                user.final_match = round((user.match*0.7 + user.preference_match*1.3)/2)
                user.save()
            preference_based_users=exclude_connections_and_requests_made(request,preference_based_users)
            preference_based_users=exclude_unmatch_age(request,preference_based_users)
            sorted_users = preference_based_users 
            context['all_profiles']=sorted_users
            return render(request,'home/index.html',context)
        else:
            return render(request,'home/index.html',context={"no":True})
    else:
        return render(request,'home/index.html', context={"no_profile": True})


def jaccard(list1, list2):
    intersection = len(list(set(list1).intersection(set(list2))))
    print(f"Raw intersection:{intersection}")
    for item in list1:
        if item == "doesn't matter":
            intersection += 1
    print(f"Final intersection {intersection}")
    union = (len(list2) + len(list2)) - intersection
    return (float(intersection) / union-0.2)


def get_age(user):
        today = date.today()
        return today.year - user.DOB.year - ((today.month, today.day) < (user.DOB.month, user.DOB.day))


def age_match(age,age_from,age_to):
    if age in range(age_from,age_to):
        return True
    return False


def exclude_connections_and_requests_made(request,my_users):
    existing_connections = request.user.connections.all()
    existing_request_sent = ConnectionRequest.objects.filter(sender=request.user,is_active=True)
    existing_request_received = ConnectionRequest.objects.filter(receiver=request.user,is_active=True)
    existing_connected_users=set([user.user for user in existing_connections])
    existing_request_sent_users = set([user.receiver for user in existing_request_sent])
    existing_request_received_users = set([user.sender for user in existing_request_received])
    existing_connected_users.update(existing_request_sent_users)
    existing_connected_users.update(existing_request_received_users)
    removee = list(existing_connected_users)
    filtered_users = [user for user in my_users if user not in removee]
    return filtered_users


def evaluate_age_preference(request,user):
    my_age = request.user.userr.get_age();
    user_age_from = user.preference.age_from
    user_age_to = user.preference.age_to
    if my_age in range(user_age_from,user_age_to+1):
        return False
    elif my_age in range(user_age_from-4,user_age_to+5):
        return True


def exclude_unmatch_age(request,my_users):
    age_from = request.user.preference.age_from
    age_to = request.user.preference.age_to
    prefered_gender = request.user.preference.gender
    users = CustomUser.objects.filter(gender=prefered_gender).exclude(username=request.user.username)
    unwanted_users = [user for user in users if user.userr.get_age() not in range(age_from-4,age_to+5)]
    print("unwanted users:")
    print(unwanted_users)
    filtered_users = [user for user in my_users if user not in unwanted_users]
    return filtered_users    


def my_index(request):
    return render(request,'home/index1.html')