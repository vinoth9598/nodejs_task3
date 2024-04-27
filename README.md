Mentors and Students Assigning database


Mentor Api's

GET         /Mentors

POST         /Mentors

GET         /Mentors/get-mentor/:ID 


Student Api's

GET           /Students 

POST          /Students 

To get list of students whose mentors weren't assigned

GET           /Students//no-mentors

Assign or change Mentor for Student -- select one student and assign one mentor

PATCH         /Students/assign-mentor/:id

select one mentor and add to multiple students

PATCH      /Students//assign-mentor-students

show all students for a particular mentor 

GET       /Students//mentor-students/:id
