# My Elective

An webapp to provide the fucntionality to select change and do the required task as per the following prblem statements :

### 1. Problem Statement 1 : Elective Subject Selection Project - Student Details App

    Build an application that can be run as a container on the cloud for creating/updating/deleting a student

    The functionality of the application is:

    1. Allow user to add, update, delete a student

    2. Each student should have:

    Student Name
    Student ID Number
    Student Email
    Student Phone Number
    3. Persist all student details in the database

### 2. Problem Statement 2 :Elective Subject Selection Project - Elective Subject App

    Build an application that can be run as a container on the cloud for creating/updating/deleting an elective subject.

    The functionality of the application is:

    1. Allow user to add, update, delete an elective subject

    2. Each elective subject should have:

    Elective Subject Name
    Elective Subject Description
    Elective Subject Code
    3. Persist all subjects in the database

### 3. Problem statement 3 :Elective Subject Selection Project - Elective Subject Selection App

    Build an application that can be run as a container on the cloud for selecting/updating/deleting elective subject for each student.

    The functionality of the application is:

    1. There should be 2 pages/screens/views – Student Page and Elective Subject Page

    2. On the Student Page:

    The user should be able to select a student from a list of students(From Problem Statement 1)
    Then let them select, update, delete the elective subject(s)(From Problem Statement 2) for that student
    3. On the Elective Subject Page:

    The user should be able to select an elective subject from list of elective subject (From Problem Statement 2)
    Then let them select, update, delete the student(s) that have chosen the elective subject
    4. Persist all details in the database

## Overview

The project is devided into two parts FrontEnd and BackEnd as can be seen from the dirctory names. The FrontEnd directory contain a React App which can then be converted to native React Native app to install on android app.

The BackEnd directory contains a Django server code, to create a server which will stores the data of students for the elective subject details and will do all the CRUD operations neccesary.

## TODO

1. Configure all the BackEnd work.
2. Make the frontend desing better.
