# Generated by Django 3.1.7 on 2021-03-28 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='challenges',
            name='render_img',
            field=models.BooleanField(default=False),
        ),
    ]
