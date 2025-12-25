from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter
from django.contrib.auth.decorators import login_required

class MyAccountAdapter(DefaultAccountAdapter):
    def get_signup_redirect_url(self, request):
        path = "/profile/profile_setup/"
        return path