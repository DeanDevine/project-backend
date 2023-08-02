const devData = require('./data/development/index.js');
const seed = require('./seed.js');

const mongoose = require("./connection.js")

const runSeed = () =>{
   return  seed(devData)
    .then (() => {
        console.log("Seed ok......")
    })
    .catch((error) => {
        console.log("Seed Error---->",error)
    })
   .finally(() => {
      mongoose.connection.close();
   })
}

runSeed();

/*
const runSeed = () => {
    return seed(devData)
    .then(() => {
        console.log("Run Seed completed....")
    })
    .catch((error) => {
        console.log("Run Seed Error----->",error)
    })
} 
*/


