from django.db import models
from django.contrib.auth import get_user_model
from django.dispatch import receiver
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
# Create your models here.

class ConnectionList(models.Model):
    user =  models.OneToOneField(get_user_model(),on_delete=models.CASCADE,related_name="user")
    connections = models.ManyToManyField(get_user_model(),blank=True,related_name="connections")


    def __str__(self):
        return self.user.username
    
    def add_connection(self,account):
        # Add a new connection
        if not account in self.connections.all():
            self.connections.add(account)
    
    def remove_connection(self,account):
        # Remove a friend
        if account in self.connections.all():
            self.connections.remove(account)
            

    def disconnect(self, removee):
        # unfriending a friend
        remover = self

        # remove connection from remover connections
        remover.remove_connection(removee)
        # remove connection from removee connections
        myremovee = ConnectionList.objects.get(removee)
        myremovee.remove_connection(self.user)

    def is_connection(self, connection):
        if connection in self.connections.all():
            return True
        return False

    @staticmethod
    def retrieve_mutual_connection(me,friend):
        self_connections = me.connections.all()
        friend_connection = friend.connections.all()
        mutual_connection = list(set(self_connections) & set(friend_connection))
        return mutual_connection


class ConnectionRequest(models.Model):
    sender = models.ForeignKey(get_user_model(),on_delete=models.CASCADE,related_name="sender")
    receiver = models.ForeignKey(get_user_model(),on_delete=models.CASCADE,related_name="receiver")
    is_active = models.BooleanField(blank=True,null=False,default=True)
    timestanp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.sender.username + '-> ' + self.receiver.username
    
    def accept(self):
        # accept a connection reqest
        # update both sender and receiver connections
        myreceiver = ConnectionList.objects.get(user=self.receiver)
        mysender = ConnectionList.objects.get(user=self.sender)
        if myreceiver:
            myreceiver.add_connection(self.sender)
            mysender.add_connection(self.receiver)
            self.is_active = False
            self.save()
    
    def decline(self):
        self.is_active = False
        self.save()
    
    def cancel(self):
        self.is_active = False
        self.save()
    @staticmethod
    def check_request(sender,receiver):
        try:
            reqobject= ConnectionRequest.objects.get(sender=sender,receiver=receiver,is_active=True)
            if reqobject:
                return reqobject
            return False
        except ObjectDoesNotExist:
            reqobject = None

    def get_pending_request_frequency(self):
        print("hereeeeeee")
        print(self)
        return ConnectionList.objects.filter(receiver=self,is_active=True).count()




