from . import views
from django.urls import path

urlpatterns = [
  path("", views.Products),
  path("Account/", views.Account, name="account"),
  path("Cart/", views.Cart),
  path("Return/", views.Return),
  path("Product/", views.ProductDetails, name="product"),
  ]