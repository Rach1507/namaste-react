






const arr = [1,2,3,4,5,6,6,7,8,9,10];

// reduce - takes a callback function and an initial value
// callback function takes 4 arguments - accumulator, current value,  index,  array


arr.reduce((sum , curr)=> sum + curr,0);
// if 0 not given takes the first element as the initial value


arr.reduceRight((sum , curr)=> sum + curr,0);
// if 0 not given , throws an error 



// TO FIND THE MAXIMUM VALUE IN AN ARRAY

arr.reduce((max, curr) => Math.max(max, curr), -Infinity);




// more examples  : 

const users = [
    {firstName: "blabla" , lastName: "lastBla" , age:26},
    {firstName: "blabla1" , lastName: "lastBla" , age:50},
    {firstName: "blabla2" , lastName: "lastBla" , age:75},
    {firstName: "blabla3" , lastName: "lastBla" , age:26},
]

// ["blabla lastBla" , "" ,""] 
// wht would u use ?

console.log(users.map(user => user?.firstName + " " + user?.lastName));

//  ['blabla lastBla', 'blabla1 lastBla', 'blabla2 lastBla', 'blabla3 lastBla']


// find out how many people are of a particular age : 
// {26:2 , 50:1 , 75:1}

// two step 

// - u cant expect an object directly out of map returns - because - it returns arr 
// but i can destruct the array 

// [age, ageCount] = ageObject
// return {age: ageCount} 
// 

// for each user object - map 
// user.age : get count of - reduce - 

// not required 

// const userObjCount = users.reduce((countObj,user) => {
//     const age = user.age; 
//     const currAgeCount = users.reduce((count,currUser) => currUser.age === age ? count+1 : count,0);
//     console.log(age);
//     console.log(currAgeCount);
//     return {...countObj,[age]:currAgeCount };
// } , {})

// console.log("userCountObj",userObjCount);
// //{26: 2, 50: 1, 75: 1}

const userObjCount = users.reduce((countObj,user) => {
    if(countObj[user.age])  countObj[user.age] = ++countObj[user.age] ;
    else countObj[user.age] = 1;
    return countObj;
} , {})

console.log("userCountObj",userObjCount);
//{26: 2, 50: 1, 75: 1}


// find the first name of all the people whose age is less than 30 


let millineals = users.filter(user => user.age < 30 ? user.firstName : null).filter(Boolean);
// this whole  statement : user.age < 30 ? user.firstName : null if it is true - that user object will be filtered 
// console.log("millineals");
// // [
//     {
//         "firstName": "blabla",
//         "lastName": "lastBla",
//         "age": 26
//     },
//     {
//         "firstName": "blabla3",
//         "lastName": "lastBla",
//         "age": 26
//     }
// ]

// but filter can be improved 
millineals = users.filter(user => user.age < 30 );
console.log("millineals",millineals);

// // [
//     {
//         "firstName": "blabla",
//         "lastName": "lastBla",
//         "age": 26
//     },
//     {
//         "firstName": "blabla3",
//         "lastName": "lastBla",
//         "age": 26
//     }
// ]




const millinealsFirstName = millineals.map(millineal => millineal.firstName);
console.log("millinealsFirstName",millinealsFirstName);
// [
    // "blabla",
    // "blabla3"
// ]


var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// Our objective: get the total score of force users only. 

const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log("totalJediScore",totalJediScore);