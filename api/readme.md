# API explanations

## npm packages

- `express` is used to simplify working with nodejs to build server APIs that occasionally (not always) interract with databases

- `mongoose` is used to simplify working with mongo database to manage collections, store, read, update and delete data with ease. 

- `bcrypt` is used to hash data and compare them to non-hashed data, that way we add a layer of security to especially passwords in databases.

- `cors` is a cross-origin-resource-security package that allows for easy setup for CORS security options like allowed methods, domains, cookies, and so.


## files and folders

1. [node_modules] stores the npm packages we download.

2. [db.config.js] has the basic configuration of mongodb, like to connect to it to be able to use its functions. we import this file in the [server.js] to establish the connection on API start.


3. [models] is a folder that stores the database configurations of every collection inside mongoDB. 


4. [routers] is a folder that stores the route handlers (it means specific paths in the URL after the domain name) 
e.g.: /user part is handled with [routers/user.js].


5. [server.js] is the manager of the API:
  - we initialize the API,

  - check with cors if the client is allowed access to the API,

  - connect to the database,

  - use middlewares such as express.json() to parse the incoming request's json data and put them inside `request.body` object,

  - and finally, we listen to the port.


## mongodb atlas details

- i created an email in outlook for your mongodb atlas account usage. 

email: william.mongo123@outlook.com
password: william123@

- in mongodb atlas, the password is "passive123@"