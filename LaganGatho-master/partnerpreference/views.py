from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import CreateView,UpdateView
from .models import Preference
from .forms import partner_preference_edit_form, partner_preference_form
from request_middleware.middleware import get_request
from django.contrib import messages
# Create your views here.

class PreferenceSetupView(CreateView):
    model = Preference
    template_name = "partnerpreference/preference_setup.html"
    form_class = partner_preference_form
    success_url = '/'

    def form_valid(self, form):
        form.instance.user=self.request.user
        messages.success(self.request, "Preference Setup Successful")
        return super().form_valid(form)
    
    @classmethod
    def abc(self):
        self.initial['religion']= eval(get_request.user.preference.religion)


class PreferenceEditView(UpdateView):
    model = Preference
    form_class = partner_preference_edit_form
    template_name = "partnerpreference/preference_edit.html"
    success_url = '/'

    def form_valid(self,form):

        if len(eval(form.instance.marital_status)) > 1 and "doesn't matter" in form.instance.marital_status:
            form.add_error("marital_status","You can't select othrt checkbox with doesn't matter box")
            return super().form_invalid(form)

        elif len(eval(form.instance.religion)) > 1 and "doesn't matter" in form.instance.religion:
            form.add_error("religion","You can't select othrt checkbox with doesn't matter box")
            return super().form_invalid(form)
        elif len(eval(form.instance.education)) > 1 and "doesn't matter" in form.instance.education:
            form.add_error("education","You can't select othrt checkbox with doesn't matter box")
            return super().form_invalid(form)
        elif len(eval(form.instance.rashi)) > 1 and "doesn't matter" in form.instance.rashi:
            form.add_error("rashi","You can't select othrt checkbox with doesn't matter box")
            return super().form_invalid(form)
        elif len(eval(form.instance.family_type)) > 1 and "doesn't matter" in form.instance.family_type:
            form.add_error("family_type","You can't select othrt checkbox with doesn't matter box")
            return super().form_invalid(form)
        else:
            messages.success(self.request, "Preference Updated Successfully")
            return super().form_valid(form)
    def get_success_url(self):
        return reverse_lazy('user_profile:profile-detail', kwargs={'id': self.request.user.pk})    


   

    





def preference_edit(request,pk):

    if request.method == 'POST':
        pref_form = partner_preference_edit_form(request.POST,instance=request.user.preference)
        print("debug")
        print(pref_form.cleaned_data)


        if pref_form.is_valid():
            print("this called")
            pref_form.save()
            return redirect('/')
        else:
            print("not valid");
        
    else:
        my_form = partner_preference_edit_form(instance=request.user.preference)
        ireligion = eval(request.user.preference.religion)
        imarital_status = eval(request.user.preference.marital_status)
        ieducation = eval(request.user.preference.education)
        ifamily_type = eval(request.user.preference.family_type)
        irashi = eval(request.user.preference.rashi)
        
        my_form.initial['religion']= ireligion
        my_form.initial['marital_status']= imarital_status
        my_form.initial['education']= ieducation
        my_form.initial['family_type']= ifamily_type
        my_form.initial['rashi']= irashi
        context = {'form':my_form}
        
        return render(request,'partnerpreference/preference_edit.html',context)

