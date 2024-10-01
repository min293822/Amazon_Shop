# Generated by Django 5.1 on 2024-09-30 09:11

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0018_alter_userinfo_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameField(
            model_name='userinfo',
            old_name='passwords',
            new_name='password',
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='birth_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='sex',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=10),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
