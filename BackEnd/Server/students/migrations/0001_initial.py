# Generated by Django 4.2.2 on 2023-07-02 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('roll_no', models.CharField(max_length=10)),
                ('elective_1', models.CharField(max_length=100)),
                ('elective_2', models.CharField(max_length=100)),
            ],
        ),
    ]
