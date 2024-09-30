from django import forms
from .models import UserInfo  # Assuming you have UserInfo model

class UserRegistrationForm(forms.ModelForm):
    class Meta:
        model = UserInfo
        fields = ['user', 'email', 'passwords']  # Adjust fields as necessary

class MyModelForm(forms.ModelForm):
    class Meta:
        model = UserInfo
        fields = ['user', 'sex', 'email']  # Adjust fields as necessary
