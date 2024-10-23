from . import views
from django.urls import path

urlpatterns = [
    path("", views.Products_view, name='products'),
    path("Cart/", views.Cart_view, name='cart'),
    path("Return/", views.Return, name='return'),
    path("ProductDetails/<str:product_id>/", views.ProductDetails_view, name="product_details"),
    path('addToCart/', views.addToCart, name='addToCart'),
    path('logout/', views.logout_view, name='logout_view'),
    path('signup/', views.signup_view, name='signup_view'),
    path('login/', views.login_view, name='login_view'),
    path('userinfo/', views.user_info, name='user_info'),
    path('send/', views.send, name='send'),
    path("ProductDetails/<str:product_id>/send/", views.sent, name="sent"),
]
