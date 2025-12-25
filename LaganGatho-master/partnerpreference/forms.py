from django.forms import ModelForm
from .models import Preference
from django import forms
from userprofile.models import UserProfile 
from request_middleware.middleware import get_request


class partner_preference_form(ModelForm):
    

    mar_choices = UserProfile.marital_status_choices + [("doesn't matter","Doesn't Matter")]
    religion_choices = UserProfile.religion_choices + [("doesn't matter","Doesn't Matter")]
    education_choices = UserProfile.education_choices + [("doesn't matter","Doesn't Matter")]
    rashi_choices = UserProfile.Rashi_choices + [("doesn't matter","Doesn't Matter")]
    family_type_choices = UserProfile.family_type_choices + [("doesn't matter","Doesn't Matter")]

    # rashi = forms.TypedMultipleChoiceField(label="Chooose Rashi:",required=True)
    


    class Meta:
        model = Preference
        fields = ['gender','marital_status','age_from','age_to','religion','education','rashi','family_type']
        

    def __init__(self, *args, **kwargs):
        super(partner_preference_form, self).__init__(*args, **kwargs)
        self.fields['marital_status'].widget = forms.CheckboxSelectMultiple(choices=self.mar_choices)
        self.fields['religion'].widget = forms.CheckboxSelectMultiple(choices=self.religion_choices)
        self.fields['education'].widget = forms.CheckboxSelectMultiple(choices=self.education_choices)
        self.fields['rashi'].widget = forms.CheckboxSelectMultiple(choices=self.rashi_choices)
        self.fields['family_type'].widget = forms.CheckboxSelectMultiple(choices=self.family_type_choices)

    
    @classmethod
    def pre_populate_choices(self):
        print("hey")
        self.initial['family_type'] = eval(get_request.user.preference.family_type)

        
        
        
class partner_preference_edit_form(partner_preference_form):
    
    class Meta:
        model = Preference
        fields = ['marital_status','age_from','age_to','religion','education','rashi','family_type']
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        print("doo")
        self.initial['family_type'] = eval(get_request().user.preference.family_type)
        self.initial['marital_status'] = eval(get_request().user.preference.marital_status)
        self.initial['religion'] = eval(get_request().user.preference.religion)
        self.initial['education'] = eval(get_request().user.preference.education)
        self.initial['rashi'] = eval(get_request().user.preference.rashi)
        


    
        
        
        

