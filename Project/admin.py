from django.contrib import admin
from .models import Watches, Clothes, Pants, Sneakers, AllProducts, UserInfo

class UserAdmin(admin.ModelAdmin):
  list_display = ('user_name', 'sex', 'email')

class ProductsAdmin(admin.ModelAdmin):
  list_display = ('name', 'price', 'id', 'stock')

admin.site.register(UserInfo, UserAdmin)
admin.site.register(AllProducts, ProductsAdmin)
admin.site.register(Watches, ProductsAdmin)
admin.site.register(Clothes, ProductsAdmin)
admin.site.register(Pants, ProductsAdmin)
admin.site.register(Sneakers, ProductsAdmin)


# Register your models here.
