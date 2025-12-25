from django.dispatch import receiver
from django.shortcuts import redirect, render
from .models import ConnectionList, ConnectionRequest
from users.models import CustomUser
from django.http import HttpResponse
from django.views.generic import ListView


# Create your views here.

def send_request(request,id):
    receiver = CustomUser.objects.get(id=id)
        # check if you have a active request sent to the user
    requests_made = ConnectionRequest.objects.filter(sender=request.user,receiver=receiver,is_active=True)
    # print("here")
    # print(requests_made)
    for req in requests_made:
        if req.is_active:
            return HttpResponse("You have a request sent to the user already!!")
            # check if the user has already sent you a request
    requests_received = ConnectionRequest.objects.filter(sender=receiver,receiver=request.user)
    for req in requests_received:
        if req.is_active:
            return HttpResponse("The user has a request sant to you already!!")

    new_request=ConnectionRequest.objects.create(sender=request.user,receiver=receiver)
    new_request.save()
    return redirect('user_profile:profile-detail',id)

def cancel_request(request,id):
    receiver = CustomUser.objects.get(id=id)
    # check if you have a active request sent to the user
    requests_made = ConnectionRequest.objects.filter(sender=request.user,receiver=receiver,is_active=True)
    print(requests_made)
    for req in requests_made:
        req.cancel();
    return redirect('user_profile:profile-detail',id)
    
def accept_request(request,id):
    sender = CustomUser.objects.get(id=id)
    # check if you have a  active request received from the user
    request_received = ConnectionRequest.objects.filter(sender=sender,receiver=request.user,is_active=True)

    for req in request_received:
        req.accept();
    return redirect('user_profile:profile-detail',id)

def decline_request(request,id):
    sender = CustomUser.objects.get(id=id)
    # check if you have a  active request received from the user
    request_received = ConnectionRequest.objects.filter(sender=sender,receiver=request.user,is_active=True)

    for req in request_received:
        req.decline();
    return redirect('user_profile:profile-detail',id)

def disconnect_user(request,id):
    remover_connection_list = ConnectionList.objects.get(user__id=request.user.id)
    remove_connection_list = ConnectionList.objects.get(user__id=id)
    removee = CustomUser.objects.get(id=id)
    remover_connection_list.remove_connection(removee)
    remove_connection_list.remove_connection(request.user)
    
    return redirect('user_profile:profile-detail',id)
    

class ConnectionListView(ListView):
    model = ConnectionList
    template_name = 'userconnectio/connectionslist.html'

    def get_queryset(self) :
        connections = self.request.user.connections.all()
        return connections

class RequestPendingListView(ListView):
    model = ConnectionRequest
    template_name = 'userconnectio/requestpendinglist.html'

    def get_queryset(self):
        pendings_requests = ConnectionRequest.objects.filter(receiver=self.request.user,is_active=True)
        return pendings_requests

class RequestSentListView(ListView):
    model = ConnectionRequest
    template_name = 'userconnectio/requestsentlist.html'

    def get_queryset(self):
        sent_requests = ConnectionRequest.objects.filter(sender=self.request.user,is_active=True)
        users = [user.receiver for user in sent_requests]
        print(users)
        return users