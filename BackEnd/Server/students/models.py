
from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=10)
    elective_1 = models.CharField(max_length=100)
    elective_2 = models.CharField(max_length=100)

    class Meta:
        app_label = 'students'
