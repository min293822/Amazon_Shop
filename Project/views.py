from django.shortcuts import render
from .models import Watches, Clothes, Pants, Sneakers
import random



def Cart(request):
  return render(request, 'Project/Cart.html')

def Account(request):
  return render(request, 'Project/Account.html')
  
def Products(request):
  watches = list(Watches.objects.all())
  clothes = list(Clothes.objects.all())
  pants = list(Pants.objects.all())
  sneakers = list(Sneakers.objects.all())
  allproducts = [{'product': p, 'category':'watch'} for p in watches] + [{'product': p, 'category':'sneaker'} for p in sneakers] + [{'product': p, 'category':'pant'} for p in pants] + [{'product': p, 'category':'cloth'} for p in clothes]
  random.shuffle(allproducts)

  context = {
    'watches':watches,
    'clothes':clothes,
    'pants':pants,
    'sneakers':sneakers,
    'allproducts':allproducts
    }
  return render(request, 'Project/Products.html', context)
  
def ProductDetails(request):
  watches = Watches.objects.all()
  clothes = Clothes.objects.all()
  pants = Pants.objects.all()
  sneakers = Sneakers.objects.all()

  context = {
    'watches':watches,
    'clothes':clothes,
    'pants':pants,
    'sneakers':sneakers
    }
  return render(request, 'Project/ProductDetails.html', context)
  
  
  
# Create your views here.
