from django.db import models
from decimal import Decimal
from django.contrib.auth.models import User
import uuid
from django.utils.text import slugify

class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=128)  
    birth_date = models.DateField()
    sex = models.CharField(max_length=10, choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ])
    address = models.CharField(max_length=999, null=True, blank=True)
    class Meta:
      ordering = ['id']
    def __str__(self):
        return self.user.username

class Products(models.Model):
    PRODUCT_TYPES = [
        ('watch', 'Watch'),
        ('clothing', 'Clothing'),
        ('pants', 'Pants'),
        ('sneakers', 'Sneakers'),
    ]
    
    name = models.CharField(max_length=277)
    color = models.CharField(max_length=399)
    size = models.CharField(max_length=399, null=True, blank=True)
    price = models.FloatField()
    stock = models.IntegerField()
    discount = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)
    advertise = models.TextField(default='')
    image_url = models.FileField(upload_to="images")
    product_type = models.CharField(max_length=10, choices=PRODUCT_TYPES, default='clothing')
    slug = models.SlugField(unique=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

   
    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name

    def discounted_price(self):
        price = Decimal(self.price)
        discount = Decimal(self.discount) / Decimal(100)
        return price * (1 - discount)

class Cart(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  completed = models.BooleanField(default=False)
  
  @property
  def item_number(self):
    cartitems = self.cartitems.all()
    quantity = sum([item.quantity for item in cartitems])
    return quantity
  
  @property
  def total_amount(self):
    cartitems = self.cartitems.all()
    total = sum([item.each_total for item in cartitems])
    return total

  
  def __str__(self):
    return str(self.id)

class CartItems(models.Model):
  products = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="items")
  cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cartitems")
  quantity = models.IntegerField(default=0)
  
  @property
  def each_total(self):
    total = self.quantity * self.products.price
    return total
    
  def __str__(self):
    return self.products.name