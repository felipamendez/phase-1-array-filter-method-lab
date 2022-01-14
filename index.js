const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// Code your solution here

// function findMatching(arrayOfDrivers, matchingName) {
// return arrayOfDrivers.filter(driver => matchingName === 'Bobby')
// }
//this kinda works

function findMatching(arrayOfDrivers, matchingName) {
const findMatchingDeclarationBobby = arrayOfDrivers.filter(matchingName => matchingName.toLowerCase() === 'bobby')
const findMatchingDeclarationSammy = arrayOfDrivers.filter(matchingName => matchingName.toLowerCase() === 'sammy')
    if (matchingName === 'Bobby') {
        return findMatchingDeclarationBobby
    }
    else if (matchingName === 'Sammy') {
        return findMatchingDeclarationSammy
    }
    else {
        return []
    }
}
findMatching(drivers, 'Bobby');
findMatching(drivers, 'Sammy');


function fuzzyMatch(arrayOfDrivers, string) {

const fuzzyMatchDeclaration = arrayOfDrivers.filter(string => string.slice(0,2) === 'Sa') //returns correct array
const fuzzyMiddleMatchDeclaration = arrayOfDrivers.filter(string => string.slice(2,4) === 'mm' )
const fuzzyEndMatchDeclaration = arrayOfDrivers.filter(string => string.slice(-1) === 'y' )

console.log(fuzzyMiddleMatchDeclaration)
if (string.slice(0,2) === 'Sa') {
    return fuzzyMatchDeclaration} 
    else {
        return []
    }
}

//const fuzzyMiddleMatchDeclaration = arrayOfDrivers.filter(string => string.slice(2,4) === 'Sa' )
//fuzzyMiddleMatchDeclaration(drivers, 'Sammy')

//trying to test first function but couldnt test it
// function fuzzyMiddleMatchDeclaration (drivers, string) {
// drivers.filter(string => string.slice(2,4) === 'Sa')

// }
// fuzzyMiddleMatchDeclaration(drivers, 'Sammy')

fuzzyMatch(drivers, 'Sa');
fuzzyMatch(drivers, 'mm');
fuzzyMatch(drivers, 'y');
//this one works
function matchName(arrayOfDrivers, string){
const matchNameDeclaration = arrayOfDrivers.filter(string => string.name === 'Bobby')
return matchNameDeclaration
}

matchName('Bobby')

//this passes first test 
// function fuzzyMatch(arrayOfDrivers, string) {
//     const fuzzyMatchDeclaration = arrayOfDrivers.filter(string => string.slice(0,2) === 'Sa' )
    
//     //const fuzzyMiddleMatchDeclaration = arrayOfDrivers.filter(string => string.slice(2,4) === 'mm' )
//     //const fuzzyEndMatchDeclaration = arrayOfDrivers.filter(string => string.slice(-1) === 'Sa' )
//     // //return fuzzyMatchDeclaration;
//     //console.log(fuzzyMiddleMatchDeclaration)
//     console.log(fuzzyMatchDeclaration)
//     if (string = 'Sammy') {                      //this if statement works for either/or but not both tests
//         return fuzzyMatchDeclaration} 
//         else {
//             return []
//         }
//     }