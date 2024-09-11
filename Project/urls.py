from . import views
from django.urls import path

urlpatterns = [
  path("", views.Home),
  path("Login/", views.Login),
  path("Cart/", views.Cart)
  ]