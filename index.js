// Code your solution here
function findMatching(drivers, name){
//     console.log(drivers)
//     const sameName = []
//     for( let driverName of drivers ){
//         if (driverName.toLowerCase() === name.toLowerCase()){
// sameName.push(driverName)
//         }
//     }
//    return sameName
let sameName = drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
return sameName 
}



function fuzzyMatch(drivers, name){
// const driver = []

//   for(let driverName of drivers){
//     if(driverName.slice(0,2) === name){
// driver.push(driverName)

//     }return driver
let matchingDrivers = drivers.filter(driver => driver.slice(0,2)=== name)
return matchingDrivers
}


function matchName(drivers, name){
let sameName = drivers.filter(driver => driver.name === name)
return sameName

}

//    const myArray = [
//     {
//         name: 'Robert',
//         hometown: 'Pittsburgh' },
//       {
//         name: 'Jimmy',
//         hometown: 'New York' } ,
//       {
//         name: 'Florence',
//         hometown: 'Cleveland' },
//       {
//         name: 'Jimmy',
//         hometown: 'Los Angeles' },
//       {
//         name: 'Daren',
//         hometown: 'Tampa Bay' }
//    ] 

// console.log(matchName(myArray,"Jimmy"))



