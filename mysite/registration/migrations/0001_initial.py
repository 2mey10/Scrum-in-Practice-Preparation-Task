# Generated by Django 4.1.4 on 2022-12-20 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(max_length=200)),
                ('image', models.ImageField(upload_to='images/')),
                ('description', models.TextField(max_length=10000)),
                ('user', models.TextField(max_length=100)),
            ],
        ),
    ]