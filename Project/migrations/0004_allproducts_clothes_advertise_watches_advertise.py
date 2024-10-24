# Generated by Django 5.1 on 2024-09-08 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0003_alter_clothes_size_alter_sneakers_size'),
    ]

    operations = [
        migrations.CreateModel(
            name='AllProducts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=277)),
                ('color', models.CharField(max_length=399)),
                ('size', models.CharField(max_length=399)),
                ('price', models.FloatField()),
                ('stock', models.IntegerField()),
                ('advertise', models.TextField(default='')),
                ('image_url', models.CharField(max_length=2029)),
            ],
        ),
        migrations.AddField(
            model_name='clothes',
            name='advertise',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='watches',
            name='advertise',
            field=models.TextField(default=''),
        ),
    ]
