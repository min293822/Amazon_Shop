from . import views
from django.urls import path

urlpatterns = [
  path("", views.Home),
  path("Account/", views.Account),
  path("Cart/", views.Cart)
  ]