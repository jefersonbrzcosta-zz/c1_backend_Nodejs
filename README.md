# **Welcome to Correlation One - Backend**

## Introduction
This API service will provide all information for the Data Science test

**This project runs locally with yarn dev command or via docker with yarn start command**

## Endpoints

 - POST /assessment/create -  Create an assessment and get the unique identifier in the response;
 
 - GET /assessment/:assessmentId/question/:questionId -  Get all the data from a specific question, you will also get additional information with each request (ex. seconds left)
 
 - POST /assessment/:assessmentId/answer - Send the answer for the question; (TO DO)
 
 - POST /assessment/:assessmentId/end - Finish the test; (TO DO)

> Check Swagger docs for data details. (TO DO)



## Run the project
	
    - clone repository
    - run yarn or npm inside the root folder to install dependencies
    - run yarn start to build the docker image and start the server
    - run yarn test to run all the test

**Data is being saved in a remote MongoDB service**

Jeferson Costa
