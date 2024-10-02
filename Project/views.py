
import random
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import UserInfo, Watches, Clothes, Pants, Sneakers
from .forms import UserInfoForm
from django.contrib.auth.models import User
from django.http import JsonResponse
import geocoder

def location(request):
    g = geocoder.ip('me')
    country = g.country if g.country else "Not Found"
    return JsonResponse({'country': country})
    
def user_info(request):
  if request.user.is_authenticated:
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
      user_detail = {
        'username': request.user.username,
        'email': request.user.email,
            }
      return JsonResponse({'userDetail': user_detail})
    return render(request, 'Project/user_data.html', {'userinfo': request.user})
  else:
    return redirect('login_view')


def login_view(request):
  if request.method == "POST":
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
      login(request, user)
      return redirect('user_info')
    else:
      messages.error(request, "Invalid username or password")
  return render(request, 'Project/login.html')

def signup_view(request):
  if request.method == 'POST':
    form = UserInfoForm(request.POST)
    if form.is_valid():
      email = form.cleaned_data['email']
      if User.objects.filter(email=email).exists():
        messages.error(request, 'Account Existed')
      else:
        userinfo = form.save()
        user = authenticate(username=userinfo.user.username, password=request.POST['password'])
        login(request, user)
        messages.success(request, "Success")
        return redirect('user_info')
    else:
      messages.error(request, "Unsuccessful")
  else:
    form = UserInfoForm()
  return render(request, 'Project/signup.html', {'form':form})
  
def logout_view(request):
  logout(request)
  messages.success(request, 'You have been log out')
  return redirect('login_view')

def Return(request):
    return render(request, 'Project/Return.html')

def Cart(request):
    return render(request, 'Project/Cart.html')

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
