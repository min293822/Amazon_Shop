# Generated by Django 5.1.2 on 2024-10-22 06:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0020_cart_cartitems'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitems',
            name='cart',
        ),
        migrations.RemoveField(
            model_name='cartitems',
            name='clothes',
        ),
        migrations.RemoveField(
            model_name='cartitems',
            name='pants',
        ),
        migrations.RemoveField(
            model_name='cartitems',
            name='sneakers',
        ),
        migrations.RemoveField(
            model_name='cartitems',
            name='watches',
        ),
        migrations.AlterModelOptions(
            name='clothes',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='pants',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='sneakers',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='userinfo',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='watches',
            options={'ordering': ['id']},
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
        migrations.DeleteModel(
            name='CartItems',
        ),
    ]
