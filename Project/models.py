from django.db import models
from decimal import Decimal
from django.contrib.auth.models import User

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

    def __str__(self):
        return self.user.username


class Watches(models.Model):
  name = models.CharField(max_length=277)
  color = models.CharField(max_length=399)
  price = models.FloatField()
  stock = models.IntegerField()
  discount = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)
  advertise = models.TextField(default='')
  image_url = models.CharField(max_length=2029)
  
  def discounted_price(self):
    price = Decimal(self.price)
    discount = Decimal(self.discount) / Decimal(100)
    return price * (1 - discount)
  
  
class Clothes(models.Model):
  name = models.CharField(max_length=277)
  color = models.CharField(max_length=399)
  size  = models.CharField(max_length=399)
  price = models.FloatField()
  stock = models.IntegerField()
  discount = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)
  advertise = models.TextField(default='')
  image_url = models.CharField(max_length=2029)
  
  def discounted_price(self):
    price = Decimal(self.price)
    discount = Decimal(self.discount) / Decimal(100)
    return price * (1 - discount)
  
  
class Pants(models.Model):
  name = models.CharField(max_length=277)
  color = models.CharField(max_length=399)
  size  = models.CharField(max_length=299)
  price = models.FloatField()
  stock = models.IntegerField()
  discount = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True) 
  advertise = models.TextField(default='')
  image_url = models.CharField(max_length=2029)
  
  def discounted_price(self):
    price = Decimal(self.price)
    discount = Decimal(self.discount) / Decimal(100)
    return price * (1 - discount)
  
class Sneakers(models.Model):
  name = models.CharField(max_length=277)
  color = models.CharField(max_length=399)
  size  = models.CharField(max_length=399)
  price = models.FloatField()
  stock = models.IntegerField()
  discount = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True) 
  advertise = models.TextField(default='')
  image_url = models.CharField(max_length=2029)
  
  def discounted_price(self):
    price = Decimal(self.price)
    discount = Decimal(self.discount) / Decimal(100)
    return price * (1 - discount)
  
  