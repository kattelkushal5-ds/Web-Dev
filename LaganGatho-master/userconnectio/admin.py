from django.contrib import admin
from userconnectio.models import ConnectionList,ConnectionRequest
from django.contrib.admin import ModelAdmin
# Register your models here.

class ConnectionListAdmin(ModelAdmin):
    # list_filter = ['user']
    # list_display = ['user']
    search_fields = ['user']

    class Meta:
        model = ConnectionList 
admin.site.register(ConnectionList,ConnectionListAdmin)

class ConnectionRequestAdmin(ModelAdmin):
    list_filter = ['sender','receiver']
    list_display = ['sender','receiver']
    search_fields = ['sender__username','sender__email','receiver__username','receiver_email']

    class Meta:
        model = ConnectionRequest

admin.site.register(ConnectionRequest,ConnectionListAdmin)