from . import views
from django.urls import path

# Example view

urlpatterns = [
  path("", views.Products),
  path("Account/", views.Account, name="account"),
  path("Cart/", views.Cart),
  path("Return/", views.Return),
  path("Product/", views.ProductDetails, name="product"),
  path('register/', views.register, name='register'),
  path('login/', views.user_login, name='login'),
  path('profile/', views.user_profile, name='profile'),
  path('logout/', views.user_logout, name='logout'),
  path('update/<int:pk>/', views.update_model, name='update_model'),
    # Add other paths as necessary
  ]