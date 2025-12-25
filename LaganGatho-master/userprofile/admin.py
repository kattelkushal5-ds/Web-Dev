from django.contrib import admin
from .models import *
from django.contrib.admin import ModelAdmin


# Register your models here.
@admin.register(UserProfile)
class ProfileAdmin(ModelAdmin):
    list_display = ('get_username','marital_status','education')
    prepopulated_fields = {'slug':('DOB',)}

    def get_username(self,obj):
        return obj.user.username



