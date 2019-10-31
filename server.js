'use strict';

/********************************************************************
        *   Filename: server.js
        *   Author: Gurpreet Singh
        * 	Modified by:
        * 	Email: gurpret7@gmail.com
        *   Date: 31/Oct/2019
        *   Company: HCL Technologies
        *   Project: Screening Task 
 ********************************************************************/


/********************************************************************
        *	Importing dependencies
 ********************************************************************/
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const CONST = require('./config')

const PORT = CONST.PORT;
app.use(bodyParser.json());

const task1Handler = require('./modules/task1-file');
const task2Handler = require('./modules/task2-file');
const task3Handler = require('./modules/task3-file');
const task4Handler = require('./modules/task4-file');
const task5Handler = require('./modules/task5-file');
const task6Handler = require('./modules/task6-file');


let firstParamA = 'a';
let secondParamB = 'b';
let thirdParamC = 'c';
let fourthParamD = 'd';


app.listen(PORT, () => {
    console.log('Server running on', PORT);

    console.log(task1Handler());
    console.log(task2Handler(firstParamA, secondParamB));
    console.log(task3Handler(firstParamA, secondParamB));
    console.log(task4Handler(firstParamA, secondParamB, thirdParamC, fourthParamD));
    console.log(task5Handler(firstParamA, secondParamB, thirdParamC));
    console.log(task6Handler(firstParamA, secondParamB, thirdParamC, fourthParamD));

});

module.exports = app;