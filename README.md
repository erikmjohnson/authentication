LAB 11
==============================================

This lab was learning the basics of creating a user and signing in the user. Also,
also working with JWT to authenticate.

## LAB 11
![Build Status](https://travis-ci.com/erikmjohnson/authentication.svg?branch=master)

### Author: Erik M Johnson

### Links and Resources
* [Repo](https://github.com/erikmjohnson/authentication)
* [Travis](https://travis-ci.com/erikmjohnson/authentication)
* [Heroku](https://lab-11-authentication.herokuapp.com/)

### Modules

#### server.js
* server -> has all server paths
* start -> starts server
___
#### books.js
* router -> has routes for `/books` and `/books:id`

___
#### middleware.js
* _authenticate -> authenticates user to mongodb

___

#### router.js
* authRouter -> runs `/signup` and `/signin` routes to create a new user and login user

___

#### users-model.js
* mongoose.model -> has schema for creating a new user

___

#### Tests

* To run tests use `npm test` command.
