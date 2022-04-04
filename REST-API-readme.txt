REST API using Node.js, Express web server and MySQL for performing and simple CRUD operations a MySQL database via an API client


--------------------Set up-------------------------------

- Create MySQL database

- Add 'classroom' table (classroom.sql file in folder)

- Add name of database, username and password values to file at:

	..\app\config\db.config.js 


- check the required technologies are installed (again in command line):

	npm install express mysql cors --save

Before the next step, ensure to close any processes that also use the 8080 port (ex Tomcat server)

 - open command line programme, and navigate to the root folder of this app:

	node server.js

 -  the console should show:

	"Server is running on port 8080.
	Successfully connected to the database."

-----------------To use the programme-------------

-Open Postman, or similar programme 

(the data being submitted in each case is in JSON, so please ensure that you select this option

- to insert:

	POST	http://localhost:8080/api/classrooms/

	{

	   "nameClassroom": "APIClassroom",
	   "capacityClassroom": "47",
	   "enabledClassroom": "true"

 
	}

- get all (this is a GET request without any arguments:

	GET	http://localhost:8080/api/classrooms/

- get by id (id = last param of URL)

	GET	http://localhost:8080/api/classrooms/2

- update by id:

	PUT	http://localhost:8080/api/classrooms/2

	{
		"nameClassroom": "new name APIClassroom",
   		"capacityClassroom": "52",
   		"enabledClassroom": "true"
    		
 
	}


- get by title

	GET	http://localhost:8080/api/classrooms?nameClassroom=10


- get where enabled = 1

	GET	http://localhost:8080/api/classrooms/enabled


- delete all ('delete' request without any id parameter)

	DELETE	http://localhost:8080/api/classrooms




--------------------------------------------------------------

Sources:

https://www.youtube.com/watch?v=-MTSQjw5DrM

https://www.w3schools.com/nodejs/nodejs_mysql.asp

https://www.bezkoder.com/node-js-rest-api-express-mysql/ 