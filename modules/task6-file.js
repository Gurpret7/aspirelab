'use strict';

const task4 = (firstParamA, secondParamB, thirdParamC, fourthParamD) => {

    let b = dependencyB(secondParamB);
    let c = dependencyC(thirdParamC);
    let a = dependencyA(firstParamA);


    let task4Result = [b, c, a];
    return task4Result;
}

function dependencyB(secondParamB) {
    return new Promise((resolve, reject) => {
        let dependentResponseB = secondParamB;
        resolve(dependentResponseB);
    })
}

function dependencyC(thirdParamC) {
    return new Promise((resolve, reject) => {
        let dependentResponseC = thirdParamC;
        resolve(dependentResponseC);
    })
}

function dependencyA(firstParamA) {
    return new Promise((resolve, reject) => {
        let dependentResponseA = firstParamA;
        resolve(dependentResponseA);
    })
}

module.exports = task4;