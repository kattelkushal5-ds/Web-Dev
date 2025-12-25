
from django.urls import path
from . import views

app_name = 'mutual_recommendation'
urlpatterns = [
     path('',views.mutual_recommendation,name="recommend-profile"),

]