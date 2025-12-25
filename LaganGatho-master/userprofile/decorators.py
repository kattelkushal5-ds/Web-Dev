from functools import wraps
from django.http import HttpResponseRedirect
from .models import UserProfile
from django.core.exceptions import ObjectDoesNotExist

def profile_setup_only(function):
  @wraps(function)
  def wrap(request, *args, **kwargs):
        try:
            profile= UserProfile.objects.get(user=request.user)
            print("yooo")
            print(profile)
            return function(request, *args, **kwargs)
        except ObjectDoesNotExist:
            pass

            return HttpResponseRedirect('/')

  return wrap