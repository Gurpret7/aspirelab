'use strict';

const task5 = (firstParamA, secondParamB, thirdParamC) => {

    let b = dependencyB(secondParamB);
    let c = dependencyC(thirdParamC);


    let task4Result = [thirdParamC, b, firstParamA];
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

module.exports = task5;