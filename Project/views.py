
import random
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from .models import UserInfo, Watches, Clothes, Pants, Sneakers
from .forms import UserRegistrationForm, MyModelForm 
from django.urls import reverse
# Ensure you have these forms

def update_model(request, pk):
    instance = get_object_or_404(UserInfo, pk=pk)
    if request.method == 'POST':
        form = MyModelForm(request.POST, instance=instance)
        if form.is_valid():
            form.save()
            return redirect(reverse('admin:Project_userinfo_changelist'))
    else:
        form = MyModelForm(instance=instance)
    
    return render(request, 'Project/Account.html', {'form': form})

# User Registration
def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            UserInfo.objects.create(user=user)  # Create UserInfo for the new user
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return render(request, 'Project/Register.html', {'form': form})

# User Login
def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('account')  # Redirect to account page after login
    return render(request, 'Project/Login.html')

# User Profiledef user_profile(request):
def user_profile(request):
  user_info = get_object_or_404(UserInfo, user=request.user) 
  if request.method == 'POST':
    form = MyModelForm(request.POST, instance=user_info)
    if form.is_valid():
      form.save()
      return redirect('profile')  
  else:
    form = MyModelForm(instance=user_info)
        
  return render(request, 'Project/Profile.html', {'form': form, 'user_info': user_info})


# User Logout
def user_logout(request):
    logout(request)
    return redirect('login') 

def Return(request):
    return render(request, 'Project/Return.html')

def Cart(request):
    return render(request, 'Project/Cart.html')

def Account(request):
    return render(request, 'Project/Account.html')

def Products(request):
    watches = list(Watches.objects.all())
    clothes = list(Clothes.objects.all())
    pants = list(Pants.objects.all())
    sneakers = list(Sneakers.objects.all())
    
    allproducts = (
        [{'product': p, 'category': 'watch'} for p in watches] +
        [{'product': p, 'category': 'sneaker'} for p in sneakers] +
        [{'product': p, 'category': 'pant'} for p in pants] +
        [{'product': p, 'category': 'cloth'} for p in clothes]
    )
    random.shuffle(allproducts)

    context = {
        'watches': watches,
        'clothes': clothes,
        'pants': pants,
        'sneakers': sneakers,
        'allproducts': allproducts
    }
    return render(request, 'Project/Products.html', context)

def ProductDetails(request):
    watches = Watches.objects.all()
    clothes = Clothes.objects.all()
    pants = Pants.objects.all()
    sneakers = Sneakers.objects.all()

    context = {
        'watches': watches,
        'clothes': clothes,
        'pants': pants,
        'sneakers': sneakers,
    }
    return render(request, 'Project/ProductDetails.html', context)
