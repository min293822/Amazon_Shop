
import random
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import UserInfo, Cart, CartItems, Products
from .forms import UserInfoForm
from django.contrib.auth.models import User
from django.http import JsonResponse
import geocoder
import json

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
        print('Account Existed')
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
  return render(request, 'Project/signup.html', {'form':form, 'messages':messages})
  
def logout_view(request):
  logout(request)
  messages.success(request, 'You have been log out')
  return redirect('login_view')

def Products_view(request):
    products = Products.objects.all()
    context = {'products': products}
    return render(request, 'Project/Products.html', context)

def Return(request):
    return render(request, 'Project/Return.html')

def Cart_view(request):
  if request.user.is_authenticated:
    cart, created = Cart.objects.get_or_create(user=request.user, completed=False)
    cartitems = cart.cartitems.all()
    
    context = {
      'cart':cart,
      'cartitems':cartitems,
    }
    return render(request, 'Project/Cart.html', context)
  else:
    return redirect('login_view')
  
#def location(request):
 # g = geocoder.ip('me')
 # country = g.country if g.country else "Not Found"
 # return JsonResponse(country, safe=False)

def addToCart(request):
  data = json.loads(request.body)
  product_id = data['id']
  product = Products.objects.get(id=product_id)
  
  if request.user.is_authenticated:
    cart, created= Cart.objects.get_or_create(user=request.user, completed=False)
    cart_items, created = CartItems.objects.get_or_create(products=product, cart=cart)
    cart_items.quantity += 1
    cart_items.save()
    item_number = cart.item_number
    return JsonResponse(item_number, safe=False)
  else:
    return redirect('login_view')
  

def ProductDetails_view(request, product_id):
  product = Products.objects.get(id=product_id)
  related_products = Products.objects.filter(product_type=product.product_type).exclude(id=product_id)
  context={'product': product, 'related_products':related_products}
  return render(request, 'Project/ProductDetails.html',context)
    
def send(request):
    return JsonResponse({"success":True})

def sent(request, product_id):
    return JsonResponse({"success":True})