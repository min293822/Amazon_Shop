from django.contrib import admin
from .models import Watches, Clothes, Pants, Sneakers, UserInfo

class UserAdmin(admin.ModelAdmin):
    list_display = ('user', 'sex', 'email')

class ProductsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'discount', 'discounted_price_display', 'stock', 'color')

    def discounted_price_display(self, obj):
        return obj.discounted_price()
    
    discounted_price_display.short_description = 'Discounted Price'

admin.site.register(UserInfo, UserAdmin)
admin.site.register(Watches, ProductsAdmin)
admin.site.register(Clothes, ProductsAdmin)
admin.site.register(Pants, ProductsAdmin)
admin.site.register(Sneakers, ProductsAdmin)