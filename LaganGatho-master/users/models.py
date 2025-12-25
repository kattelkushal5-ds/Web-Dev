from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class CustomUser(AbstractUser):
    GENDER_CHOICES= (
        ('Male','Male'),
        ('Female','Female'),
        ('Other','Other'),
    )
    gender = models.CharField(max_length=10,choices=GENDER_CHOICES,default="Male")
    contact = models.CharField(max_length=10)
    national_id =models.CharField(max_length=30,null=False,blank=False,default=100)
    id_photo = models.ImageField(upload_to="id_pic",default='default.jpg',null=False, blank=False)
    match = models.IntegerField(default=0)
    preference_match = models.IntegerField(default=0)
    final_match = models.IntegerField(default=0)

    id_verified = models.BooleanField(default=False)
    nam = models.CharField(default="jpt",max_length=10)

    class Meta:
        ordering = ('-final_match',)

    def __cmp__(self, other):
        try:
            return cmp(self.final_match, other.final_match)
        except AttributeError:
            return cmp(self.final_match, other)
   

    def __str__(self): 
        return self.username

    @staticmethod
    def get_users(choice):
        users = CustomUser.objects.all()
        desired_users = []
        for user in users:
            mylist = eval(user.preference.marital_status)
            if not (set(choice).isdisjoint(set(mylist))):
                desired_users.append(user)
        return desired_users
    def __init__(self, *args, **kwargs):
        super().__init__(*args,**kwargs)



    
