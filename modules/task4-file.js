'use strict';

const task4 = (firstParamA, secondParamB, thirdParamC, fourthParamD) => {

    let b = dependencyB(secondParamB);
    let d = dependencyD(fourthParamD);


    let task4Result = [b, firstParamA, d, thirdParamC];
    return task4Result;
}

function dependencyB(secondParamB) {
    return new Promise((resolve, reject) => {
        let dependentResponseB = secondParamB;
        resolve(dependentResponseB);
    })
}

function dependencyD(fourthParamD) {
    return new Promise((resolve, reject) => {
        let dependentResponseD = fourthParamD;
        resolve(dependentResponseD);
    })
}

module.exports = task4;