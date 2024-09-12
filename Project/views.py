from django.shortcuts import render
from .models import Watches, Clothes, Pants, Sneakers, AllProducts
import random

def Cart(request):
  return render(request, 'Project/Cart.html')

def Login(request):
  return render(request, 'Project/Login.html')
  
def Home(request):
  watches = Watches.objects.all()
  clothes = Clothes.objects.all()
  pants = Pants.objects.all()
  sneakers = Sneakers.objects.all()
  allproducts = list(AllProducts.objects.all())
  random.shuffle(allproducts)

  context = {
    'watches':watches,
    'clothes':clothes,
    'pants':pants,
    'sneakers':sneakers,
    'allproducts':allproducts
    }
  return render(request, 'Project/Home.html', context)
  
  
  
  
  
# Create your views here.
