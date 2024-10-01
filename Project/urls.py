from . import views
from django.urls import path

urlpatterns = [
    path("", views.Products, name='products'),
    path("Cart/", views.Cart, name='cart'),
    path("Return/", views.Return, name='return'),
    path("Product/", views.ProductDetails, name="product_details"),
    path('logout/', views.logout_view, name='logout_view'),
    path('signup/', views.signup_view, name='signup_view'),
    path('login/', views.login_view, name='login_view'),
    path('user/', views.user_info, name='user_info'),

]
