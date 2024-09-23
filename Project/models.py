from django.db import models
from decimal import Decimal

class UserInfo(models.Model):
  user_name = models.CharField(max_length=277)
  email = models.CharField(max_length=577)
  passwords = models.CharField(max_length=128)
  birth_date = models.CharField(max_length=20)
  sex = models.CharField(max_length=277)

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
  
  