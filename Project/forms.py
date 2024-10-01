from django import forms
from django.contrib.auth.models import User
from .models import UserInfo

class UserInfoForm(forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password', 'id':'password'})
    )
    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Full Name', 'id':'name'})
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email Address', 'id':'email'})
    )
    birth_date = forms.DateField(
        widget=forms.SelectDateWidget(attrs={'class': 'form-control', 'id':'birth'},years=range(1950, 2025))
    )

    class Meta:
        model = UserInfo
        fields = ['name', 'email', 'password', 'birth_date']

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
