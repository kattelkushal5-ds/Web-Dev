from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class MutualConnection(models.Model):
    user = models.ForeignKey(get_user_model(),blank=True,on_delete=models.CASCADE)
    friend = models.ForeignKey(get_user_model(),on_delete=models.CASCADE)
    mutual_connections = models.ManyToManyField(get_user_model(),on_delete=models.CASCADE,related_name="mutual_connections")


    def add_mutual(self,account):
        self.mutual_connections.add(account)
    
    def remove_mutual(self,account):
        self.mutual_connections.remove(account)
