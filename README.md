This project creates a Docker container running MongoDB with a pre-loaded employee dataset.

## Building  and running the Docker Image 

Type the following command on the terminal 

docker-compose up --build -d

## Accessing MongoDB

Type the following command on the terminal  

docker exec -it mongodb-instance mongosh "mongodb://admin:password@localhost:27017/"

this will start the mongoDB instance then type db.employee.find() to see the data

NOTE - The mongoDB instance is authenticated so we can only access the collection by using the connection string with username and password else it will throw authentication error.

### Via MongoDB Compass

Type the following connection string on mongoDB Compass

Connection string: "mongodb://admin:password@localhost:27018/"

## Sample Data
The Sample Data is inside the data folder where there is a json file which contains the data alone and a js file that is used to preload the data to the mongoDB image.

The database contains an 'employee' collection with sample employee records including:
- Employee ID
- Name
- Position
- Department
- Salary
- Skills
- Projects

## Python Script
There is a Python Script called script.py whihc can be run using -

python script.py

this will connect to the our mongoDB instance and will print the data from the employee collection.
