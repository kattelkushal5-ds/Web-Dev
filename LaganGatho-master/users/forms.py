from dataclasses import fields
from allauth.account.forms import SignupForm
from django import forms
from crispy_forms.helper import FormHelper


    


class CustomSignupForm(SignupForm):

    contact = forms.CharField(max_length = 10)
    GENDER_CHOICES= (
        ('Male','Male'),
        ('Female','Female'),
        ('Other','Other'),
    )
    gender = forms.ChoiceField(choices=GENDER_CHOICES, widget=forms.RadioSelect)
    first_name = forms.CharField(max_length = 25)
    last_name = forms.CharField(max_length = 25)
    national_id = forms.CharField(max_length = 30)
    id_photo = forms.ImageField()


    
    field_order = ['email','username','national_id','first_name','last_name','gender','contact','id_photo','password1','password2']

    def save(self, request):

        # Ensure you call the parent class's save.
        # .save() returns a User object.
       
        user = super(CustomSignupForm, self).save(request)

        # Add your own processing here.
        form = CustomSignupForm(request.POST)
        user.gender = self.cleaned_data['gender']
        user.contact = self.cleaned_data['contact']
        user.national_id = self.cleaned_data['national_id']
        user.id_photo = self.cleaned_data['id_photo']
        
        
        user.save()

        


        # You must return the original result.
        return user
    def __init__(self, *args, **kwargs):
        use_custom_control = True

        super().__init__(*args, **kwargs)

        self.helper = FormHelper(self)