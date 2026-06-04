//PART 1

//PART 2--EXPANDING FUNCTIONALITY
const csvInfo = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"; 
//turning the string into rows using SPLIT 
const rows  = csvInfo.split("\n"); 

//split each row into columns, and create the array 
const arr = rows.map(row => row.split(",")); 
console.log(arr[0].length)


//expected result 
// const arr = [
//  ["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor's Assistant", "26"]
// ]
// 
//PART 3-- TRANSFORMING DATA 

const heading = arr[0]
console.log(heading)
const newArray = []
//for loop over our array to access each nested array (row)
for (let i = 1; i < arr.length; i++){
    // console.log("Row: "+i)
    const row = arr[i]; 
    
    // nested array (ex: ['42', 'Bruce", "Knight', '41'])
  
//turn our row (array) into an object 
    const obj = {}
    // const obj = {
    //     id: row[0],  
    //     name: row[1],
    //     occupation: row[2], 
    //     age: row[3], 

    // }; 
    for (let j = 0; j < heading.length; j++){
        // console.log("Heading "+ heading[j])
        // console.log(`Heading ${heading[j]}`)
        // console.log("Value "+ row[j])
        obj[heading[j].toLowerCase()] = row[j];
        // console.log(obj)
    }
    // add our object to the arr2 (in the global scope) to save it 
   newArray.push(obj); 
}
    console.log(newArray); 

// // //output of part 3 
// /*[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }]*/

// //PART 4-- SORTING AND MANIPULATING DATA 

const sortArr = newArray.sort((a, b) => a.id  - b.id);
console.log(sortArr);
sortArr.pop(); 
console.log(sortArr); 

//remove the last element from the sorted array 

//insert the following object at index 1: 
//
const newObjAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
sortArr.splice(1,0,newObjAtIndex1);
// console.log("After Splice")
// console.log(sortArr); 
//Add the following object to the end of the array:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" } 
const newIdObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" }; 
sortArr.push(newIdObject);
console.log(sortArr);
//average 
let sum = 0;
console.log(sum)
for (let i = 0; i <sortArr.length; i++) {
    sum += Number(sortArr[i].age);
    console.log("Sum: "+ parseInt(sum))
    }
    const avgAge = sum / sortArr.length; 
    console.log(avgAge);
/*
//PART 5--FULL CIRCLE 
//transform the final set of data back into CSV format.
const backToStrings = arr3.map(row => backToStrings.join(',')); 

const newString = backToStrings.join('\n'); 

console.log(result); 

*/