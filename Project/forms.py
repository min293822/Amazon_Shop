from django import forms
from .models import UserInfo
from django.contrib.auth.models import User

class UserInfoForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    name = forms.CharField(max_length=100)
    birth_date = forms.DateField(widget=forms.SelectDateWidget(years=range(1950,2025)))
    class Meta:
        model = UserInfo
        fields = ['name', 'email', 'password', 'birth_date', 'sex', 'address']
    
    def save(self, commit=True):
        user = User.objects.create_user(
            username=self.cleaned_data['name'],
            email=self.cleaned_data['email'],
            password=self.cleaned_data['password']
        )
        userinfo = super().save(commit=False)
        userinfo.user = user
        if commit:
            userinfo.save()
        return userinfo
