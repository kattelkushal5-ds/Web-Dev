from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from userconnectio.models import ConnectionList


@receiver(post_save,sender = get_user_model())
def create_ConnectionList(sender,instance,created,*agrs,**kwargs):
    if created:
        con=ConnectionList.objects.create(user=instance)
        con.save()
