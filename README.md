## Documentation
This is an example of crud project using Node.js and postgres

- Node.js
- Express.js
- Postgres sql
- Sequelize
- Jwt Auth


### Script database
Install postgres sql and then open the terminal after the installation complete
- psql postgres
- CREATE ROLE postgresdb WITH LOGIN PASSWORD 'Yuhu123';
- ALTER ROLE postgres CREATEDB;
- exit 
- psql postgres -U postgresdb
- CREATE DATABASE learnnode;
- The table will automatically generated because this project was use sequalize


### API Documentation using postman
https://www.getpostman.com/collections/ed5df8269cbe7f131f8f


### How to run this project
- npm install
- npm start
- the application will running on port 8080
- Try to do a user registration, then sign in
- Try to add a product, find all products, find a product by product id, update a product by product id, delete a product by product id using postman, don't forget set token at request header 


### Reference
- Node.js & Sequalize : https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
- Express : https://www.npmjs.com/package/express

