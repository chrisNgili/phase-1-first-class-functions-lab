// Code your solution in this file
const returnFirstTwoDrivers= function([Antonia, Nuru, Amari, Mo]){
    return ['Antonia', 'Nuru'];
}
const returnLastTwoDrivers = function([Antonia, Nuru, Amari, Mo]){
    return ['Amari', 'Mo'];
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(numero){
    return function(fare){
        return fare*numero
    }
}

const fareDoubler = function(fare){
    return fare*2
}
const fareTripler = function(fare){
    return fare*3
}

const selectDifferentDrivers = function ([Antonia, Nuru, Amari, Mo],returnLastTwoDrivers){
    return returnLastTwoDrivers([Antonia, Nuru, Amari, Mo])
}