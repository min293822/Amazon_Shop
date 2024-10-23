from django.contrib import admin
from .models import UserInfo, Cart, CartItems, Products

class UserAdmin(admin.ModelAdmin):
    list_display = ('user', 'sex', 'email')

class CartItemsAdmin(admin.ModelAdmin):
    list_display = ('id',)

class ProductsAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("name",)}
    list_display = ('id', 'name', 'price', 'discount', 'discounted_price_display', 'stock', 'color')
    def discounted_price_display(self, obj):
        return obj.discounted_price()
    
    discounted_price_display.short_description = 'Discounted Price'


admin.site.register(UserInfo, UserAdmin)
admin.site.register(CartItems, CartItemsAdmin)
admin.site.register(Cart)
admin.site.register(Products, ProductsAdmin)