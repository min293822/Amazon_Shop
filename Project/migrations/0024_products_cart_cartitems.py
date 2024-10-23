# Generated by Django 5.1.2 on 2024-10-22 06:28

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0023_remove_cartitems_cart_remove_cartitems_products_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=277)),
                ('color', models.CharField(max_length=399)),
                ('size', models.CharField(blank=True, max_length=399, null=True)),
                ('price', models.FloatField()),
                ('stock', models.IntegerField()),
                ('discount', models.DecimalField(blank=True, decimal_places=1, max_digits=5, null=True)),
                ('advertise', models.TextField(default='')),
                ('image_url', models.CharField(max_length=2029)),
                ('product_type', models.CharField(choices=[('watch', 'Watch'), ('clothing', 'Clothing'), ('pants', 'Pants'), ('sneakers', 'Sneakers')], max_length=10)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('completed', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='CartItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=0)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cartitems', to='Project.cart')),
                ('products', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='Project.products')),
            ],
        ),
    ]
