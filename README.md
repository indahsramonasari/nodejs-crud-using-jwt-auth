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
- Try to register
![signup.png](/images/signup.png)

- Try to sign in
![signin.png](/images/signin.png)

- Try to add a product
![addproduct.png](/images/addproduct.png)

- Try to get all product list
![getproducts.png](/images/getproducts.png)

- Try to find a product by product id
![getproductbyid.png](/images/getproductbyid.png)

- Try to update a product by product id
![update.png](/images/update.png)

- Try to delete a product by product id using postman
![delete.png](/images/delete.png)

### Reference
- Node.js & Sequalize : https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
- Express : https://www.npmjs.com/package/express

