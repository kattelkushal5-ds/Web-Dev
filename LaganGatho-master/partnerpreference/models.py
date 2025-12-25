from msilib.schema import CheckBox
from random import choices
from tkinter import Widget
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.postgres.fields import ArrayField

from userprofile.models import UserProfile 

# Create your models here.

User = get_user_model()

class Preference(models.Model):

    age_choices = [
        (18,18),
        (19,19),(20,20),(21,21),(22,22),(23,23),(24,24),(25,25),(26,26),(27,27),(28,28),(29,29),(30,30),(31,31),(32,32),(33,33),
        (34,34),(35,35), (36,36),(37,37),(38,38),(39,39),(40,40),(41,41),(42,42),(43,43),
        (44,44),(45,45), (46,36),(47,47),(48,48),(49,39),(50,50),(51,51),(52,52),(53,53),
        (54,54),(55,55), (56,56),(57,57),(58,58),(59,59),(60,60),
    ]
    gender_choices = [
        ('Male','Male'),
        ('Female','Female'),
    ]
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="preference")
    marital_status = models.CharField(max_length=100,blank=False)
    religion = models.CharField(max_length=200,blank=True)
    family_type = models.CharField(max_length=200,blank=True)
    rashi = models.CharField(max_length=200,blank=True)
    education =models.CharField(max_length=200,blank=True)
    
    age_from= models.IntegerField(choices=age_choices)
    age_to = models.IntegerField(choices=age_choices)
    gender = models.CharField(max_length=10,choices=gender_choices)

    



    def __str__(self):
        return self.user.username
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args,**kwargs)


   
    