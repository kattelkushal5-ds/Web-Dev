from django.contrib import admin
from .models import CustomUser
from django.contrib.admin import ModelAdmin
# Register your models here.


@admin.register(CustomUser)
class UserAdmin(ModelAdmin):
    list_display = ['username','email','id_verified','national_id']
    list_filter = ('id_verified','gender')
    search_fields = ['username','national_id']
    # raw_id_fields = ['author']
    # date_hierarchy = 'publish'
    ordering = ['id_verified']
