from django.db import connection
from django.shortcuts import render
from userconnectio.models import ConnectionList,ConnectionRequest
from users.models import CustomUser
from .RBR import rb_recommend

# Create your views here.

def mutual_recommend(user,request):
    mutual_count = {}
    recom = []
    l3 =set()
    all_conections = user.connections.all()
    all_requests = ConnectionRequest.objects.filter(sender=request.user)
    for connection in all_conections:
        mutual_connections = ConnectionList.retrieve_mutual_connection(user,connection.user)
        mutual_count[connection.user.username]=len(mutual_connections)
    sorted_mutual_count = {k: v for k, v in sorted(mutual_count.items(), key=lambda item: item[1])}

    connections_username = list(sorted_mutual_count.keys())
    connections_username.reverse()

    
    # now generate friends of the sorted username
    for username in connections_username:
        userr = CustomUser.objects.get(username=username)
        user_connections = userr.connections.all()
        l3=l3.union(set(user_connections))

    l4 = list(l3)
    request_sent_users = [user.receiver for user in all_requests]

   
    l4 = [user for user in l4 if user not in all_conections]


    for i in l4:
        recom.append(i.user)
    recom = [user for user in recom if user not in request_sent_users]
    if request.user in recom:
        recom.remove(request.user)
    return recom

def mutual_recommendation(request):
    users = set()
    request_based_recommendation=rb_recommend(request.user,request)
    mutual_recommended_users = mutual_recommend(request.user,request)
    
    
    print("mutual recomm")
    print(mutual_recommended_users)
    print("request based recomm")
    print(request_based_recommendation)
    
    users.update(mutual_recommended_users,request_based_recommendation)
    users = list(users)

    
    return render(request,'mutualrecommendation/index.html',{'users':users})




