//PART 1

//PART 2--EXPANDING FUNCTIONALITY
const csvInfo = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"; 
//turning the string into rows using SPLIT 
const rows  = csvInfo.split("\n"); 

//split each row into columns, and create the array 
const arr = rows.map(row => row.split(",")); 
console.log(arr)


//expected result 
// const arr = [
// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]
// 
//PART 3-- TRANSFORMING DATA 
const arr2 = [
  [ 'ID', 'Name', 'Occupation', 'Age' ],
  [ '42', 'Bruce', 'Knight', '41' ],
  [ '57', 'Bob', 'Fry Cook', '19' ],
  [ '63', 'Blaine', 'Quiz Master', '58' ],
  [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
]; 
const arr2 = heading; 
//arr for Part 3
// const arr2 = []
//for loop over our array to access each nested array (row)
for (let i = 0; i < heading.length; i++){
    const row = heading[i]; 
    
    // nested array (ex: ['42', 'Bruce", "Knight', '41'])
  
//turn our row (array) into an object 
    const obj = {
        id: [0],  
        name: [1],
        occupation: [2], 
        age: [3], 

    }; 
    for (let j = 0; j < heading; j++){
        obj[heading[j].toLowerCase()] = row[j];
    }
    // add our object to the arr2 (in the global scope) to save it 
   heading.push(obj); 
}
    console.log(heading); 

// // //output of part 3 
// /*[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]*/

// //PART 4-- SORTING AND MANIPULATING DATA 
const sortArr = arr2.sort((a, b) => a  - b);
console.log(sortArr2);

sortArr2.pop(); 
console.log(arr2); 

//remove the last element from the sorted array 

//insert the following object at index 1: 
//
const newObjAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
sortedArr2.splice(newObjAtIndex1);
console.log(sortArr2); 
//Add the following object to the end of the array:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" } 
const newIdObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" }; 
sortedArr2.push(newIdObject);
console.log(sortArr2);
//average 
let sum = 0; 
for (let i = 0; i <sortArr2.length; i++) {
    sum += sortArr2[i].age;
}
const avgAge = sum / sortArr2.length; 
console.log(avgAge);
//PART 5--FULL CIRCLE 
//transform the final set of data back into CSV format.
const backToStrings = arr3.map(row => backToStrings.join(',')); 

const newString = backToStrings.join('\n'); 

console.log(result); 

