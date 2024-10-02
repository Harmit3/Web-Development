//Arrays

const students=['Harmit','Jhon','Andre','Bill'];
console.log(students);  //get arrays in console
console.log(students.length);
console.log(students[0]);


//you can mutex the elements
students[0]='Harmit Patel';
console.log(students[0]);   //const can not be re-assign but the values that we alreay have can be changed
//you can change,delete and update the values which is declared by const 

//push will add the valur at end and can push muttiple values
students.push('Alexa');  
students.push('siri');
console.log(students);  //would be array of 5

//Arrays are Homogenous(same datatpe values) in most language but in JS,arrays in JS are hetrogenous(can be anything,not same dattypes)
const myArray=[1,true,'Harmit','emoji',{name:'Harmit'}]; 
             //number,boolean,string,emoji,objects
console.log(myArray);

//what index is has value Harmit?  by indexOf (SEARCH OF ELEMENT)
console.log(myArray.indexOf('Harmit'));   //give ans 2
console.log(myArray.indexOf('HP'));   //give ans -1 since value is not exists in array


//POP remove element from last
myArray.pop();
console.log(myArray);

//reverse will reverse the order of array
myArray.reverse();
console.log(myArray);

