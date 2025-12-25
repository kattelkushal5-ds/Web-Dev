from django.forms import ModelForm
from .models import UserProfile
from django import forms

class ProfileEditForm(ModelForm):
    class Meta:
        model = UserProfile
        fields = ['marital_status','DOB','religion','profile_pic','location','family_type','Rashi','education','bio']


class DateInput(forms.DateInput):
    input_type = 'date'
    
class ProfileCreateForm(ModelForm):
    DOB = forms.DateField(widget=DateInput)
    class Meta:
        model = UserProfile
        fields = ['marital_status','DOB','religion','profile_pic','location','family_type','Rashi','education','bio']


