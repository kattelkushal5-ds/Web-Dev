from django.urls import path
from .import views

app_name = 'user_profile'

urlpatterns = [
    
     path('<int:id>/',views.ProfileView,name="profile-detail"),
     path('profile_setup/',views.ProfileCreateView.as_view(),name="profile-create"),
     path('edit/<int:pk>/',views.ProfileEditView.as_view(),name="profile-edit"),

]