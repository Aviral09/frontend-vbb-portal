# Generated by Django 3.0.7 on 2020-07-28 04:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='calendar_id',
            field=models.CharField(blank=True, max_length=60, null=True, verbose_name='calendar id'),
        ),
        migrations.AddField(
            model_name='appointment',
            name='event_id',
            field=models.CharField(blank=True, max_length=60, null=True, verbose_name='calendar id'),
        ),
    ]
