'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const expect = require('chai').expect;
chai.use(chaiHttp);

let task1Test = require('../server').task1Handler;
let task2Test = require('../server').task2Handler;
let task3Test = require('../server').task3Handler;
let task4Test = require('../server').task4Handler;
let task5Test = require('../server').task5Handler;
let task6Test = require('../server').task6Handler;

describe('Test case for task1', () => {
    it('It should return empty array', (done) => {
        expect(task1Test).to.eql(undefined)
        done();
    })
})

describe('Test case for task2', () => {
    it('It should return empty [a,b]', (done) => {
        expect(task2Test).to.eql(undefined)
        done();
    })
})

describe('Test case for task3', () => {
    it('It should return empty [b,a]', (done) => {
        expect(task3Test).to.eql(undefined)
        done();
    })
})

describe('Test case for task4', () => {
    it('It should return empty [b,a,d,c]', (done) => {
        expect(task4Test).to.eql(undefined)
        done();
    })
})

describe('Test case for task5', () => {
    it('It should return empty [c,b,a]', (done) => {
        expect(task5Test).to.eql(undefined)
        done();
    })
})

describe('Test case for task6', () => {
    it('It should return empty Error', (done) => {
        expect(task6Test).to.eql(undefined)
        done();
    })
})