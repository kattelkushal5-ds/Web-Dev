from audioop import reverse
from logging import raiseExceptions
from turtle import end_fill
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from .models import UserProfile
from users.models import CustomUser
from django.shortcuts import get_object_or_404
from userconnectio.models import ConnectionRequest,ConnectionList
from django.views.generic import  CreateView
from userprofile.models import UserProfile

from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404,HttpResponseRedirect
from .decorators import profile_setup_only
from django.contrib.auth.decorators import login_required
from django.views.generic import UpdateView
from .forms import ProfileEditForm,ProfileCreateForm
from django.contrib.auth.mixins import UserPassesTestMixin,AccessMixin
from partnerpreference.views import PreferenceSetupView
from django.http import HttpResponseNotFound
import math
from django.contrib import messages


# Create your views here.


# @login_required
# @profile_setup_only

def ProfileView(request,id):

    preference=calculate_preference_match(request,id)
    profile = get_object_or_404(UserProfile,user_id=id)
    if request.user.preference.gender == profile.user.gender or request.user.id == id:
        context = {}
        context['profile']=profile
        context['match_count']=math.floor(preference['match'])
        context['religion']=eval(profile.user.preference.religion)
        context['marital_status']=eval(profile.user.preference.marital_status)
        context['family_type']=eval(profile.user.preference.family_type)
        context['rashi']=eval(profile.user.preference.rashi)
        context['education']=eval(profile.user.preference.education)
        context['religion_match']=preference['religion_match']
        context['marital_status_match']=preference['marital_status_match']
        context['family_type_match']=preference['family_type_match']
        context['rashi_match']=preference['rashi_match']
        context['education_match']=preference['education_match']
        context['age_match']=preference['age_match']

        if request.user.id_verified:
            context['button_status'] = ""
        else:
            context['button_status']= "disabled"


        if request.user.id == id:
            context['is_self']= True
        else:
                # check if the profile is a connection
                connectionlist_myconnection = ConnectionList.objects.get(user=request.user)
                if connectionlist_myconnection.is_connection(profile.user):
                    context['is_connection']=True
                else:
                    context['is_connection']=False
                #check if connection request is sent to the profile
                # print("upto here okay")
                requestlist_reqsent = ConnectionRequest.check_request(sender=request.user,receiver=profile.user)
                requestlist_reqreceived = ConnectionRequest.check_request(sender=profile.user,receiver=request.user)
                # print("here")
                print(requestlist_reqsent)
                print(requestlist_reqreceived)
                if requestlist_reqsent:
                    context['request_sent']=True

                elif (requestlist_reqreceived):
                    context['request_received']=True
                else:
                    context['request_sent']=False
                    context['request_received']=False
                    context['no_requesst_sent_received']=True
                if profile.user.gender == "Male":
                    context['addressing'] = "Mr."
                    context['pronoun'] = "His"
                else:
                    context['addressing'] = "Mrs."
                    context['pronoun'] = "Her"

        return render(request,'userprofile/index.html',context)
        
    else:
        return HttpResponseNotFound("Something went wrong!")
        

def calculate_preference_match(request,id):
    match = 0
    context = {}
    neutral = ["doesn't matter","any"]
    user = CustomUser.objects.get(id=id)
    profile = UserProfile.objects.get(id=user.userr.id)
    context['religion_match']=""
    context['marital_status_match']=""
    context['family_type_match']=""
    context['education_match']=""
    context['age_match']=""
    context['rashi_match']= ""
    
    religion = eval(profile.user.preference.religion) #prefered religion of B
    rashi = eval(profile.user.preference.rashi)
    family_type = eval(profile.user.preference.family_type)
    education = eval(profile.user.preference.education)
    marital_status = eval(profile.user.preference.marital_status)
    age_from = profile.user.preference.age_from
    age_to = profile.user.preference.age_to

    #1 for religion
    neutralrel=[True for x in religion if x in neutral]
    if neutralrel:
        match += 1
        context['religion_match']="success"
    elif request.user.userr.religion in religion: # check if religion of a matches prefered religion of B
        match += 1
        context['religion_match']="success"
    
    #2 for family_type
    neutralrel=[True for x in family_type if x in neutral]
    if neutralrel:
        match += 1
        context['family_type_match']="success"
    elif request.user.userr.family_type in family_type:
        match += 1
        context['family_type_match']="success"

     #3 for rashi
    neutralrel=[True for x in rashi if x in neutral]
    if neutralrel:
        match += 1
        context['rashi_match']="success"
    elif request.user.userr.Rashi in rashi:
        match += 1
        context['rashi_match']="success"
    
    #4  for education
    neutralrel=[True for x in education if x in neutral]
    if neutralrel:
        match += 1
        context['education_match']="success"
    elif request.user.userr.education in education:
        match += 1
        context['education_match']="success"

     #5 for marital_status
    neutralrel=[True for x in marital_status if x in neutral]
    if neutralrel:
        match += 1
        context['marital_status_match']="success"
    elif request.user.userr.marital_status in marital_status:
        match += 1
        context['marital_status_match']="success"
    else:
        pass;

    #6 for age
    if request.user.userr.get_age() in range(age_from,age_to+1):
        match +=1.7
        context['age_match']="success"
    # elif request.user.userr.get_age() in range(age_from-5,age_to+5):
    #     context['age_match']="warning"


    context["match"]=match
    return (context)

  


class ProfileCreateView(CreateView):

    model = UserProfile
    template_name='userprofile/profile_setup.html'
    # fields = ['marital_status','DOB','religion','location','profile_pic','family_type','Rashi','education']
    form_class = ProfileCreateForm
    success_url = '/preference/setup/'
    # form_class = ProfileCreationForm

    def form_valid(self, form):
        form.instance.user=self.request.user
        return super().form_valid(form)
    
    def get(self, request):
        """Handle GET requests: instantiate a blank version of the form."""
        # self.object = self.get_object()
        try:   
            profile = UserProfile.objects.get(user=request.user)
            if profile:
                raise Http404("opps something went wrong!");
        except ObjectDoesNotExist:
            return render(request,'userprofile/profile_setup.html',{'form':self.get_form})

        
class ProfileEditView(UserPassesTestMixin,UpdateView):
    model = UserProfile
    form_class = ProfileEditForm
    template_name = 'userprofile/edit_profile.html'   

    def test_func(self):
        profile =self.get_object()
        if profile.id==self.request.user.userr.id:
            return True
        return False
    def get_success_url(self):
        return reverse_lazy('user_profile:profile-detail', kwargs={'id': self.request.user.pk})  

    def form_valid(self, form):
        messages.success(self.request, "Profile Edited Successfully")
        return super().form_valid(form)

def match_counter(request,id):
    preference=calculate_preference_match(request,id) 
    return preference['match']






