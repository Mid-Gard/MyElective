from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student


@api_view(['POST'])
def create_student(request):
    name = request.data.get('name')
    roll_number = request.data.get('roll_number')
    elective_subjects = request.data.get('elective_subjects')

    student = Student.objects.create(
        name=name, roll_number=roll_number, elective_subjects=elective_subjects)

    return Response({'message': 'Student created successfully'})


@api_view(['GET'])
def get_students(request):
    students = Student.objects.all()
    data = [{'name': student.name, 'roll_number': student.roll_number,
             'elective_subjects': student.elective_subjects} for student in students]

    return Response(data)
