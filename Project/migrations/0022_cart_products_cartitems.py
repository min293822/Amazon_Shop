# Generated by Django 5.1.2 on 2024-10-22 06:16

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0021_remove_cartitems_cart_remove_cartitems_clothes_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
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
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clothes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clothes', to='Project.clothes')),
                ('pants', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pants', to='Project.pants')),
                ('sneakers', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sneakers', to='Project.sneakers')),
                ('watches', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='watches', to='Project.watches')),
            ],
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
