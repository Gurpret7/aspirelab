'use strict';

const task3 = (firstParamA, secondParamB) => {

    let b = dependency(secondParamB);

    let task3Result = [b, firstParamA];
    return task3Result;
}

function dependency(secondParamB) {
    return new Promise((resolve, reject) => {
        let dependentResponseB = secondParamB;
        resolve(dependentResponseB);
    })
}

module.exports = task3;