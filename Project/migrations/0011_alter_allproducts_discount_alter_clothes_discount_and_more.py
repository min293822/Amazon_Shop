# Generated by Django 5.1 on 2024-09-17 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0010_alter_allproducts_discount_alter_clothes_discount_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='allproducts',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
        migrations.AlterField(
            model_name='clothes',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
        migrations.AlterField(
            model_name='pants',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
        migrations.AlterField(
            model_name='sneakers',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
        migrations.AlterField(
            model_name='watches',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]
