//Data types---->Numbers,String,Boolean,NULL,Undefined,Objects

//Operators-----> +,-,*,/,%

let num=3.14;           //float
let num2=10;            //int
console.log(num+num2);  //can automatically type cast in JS
//so don't need to worry about precedence and can add anything

//String ----> could be in single quote or even double quote as well
const firstName="Harmit";    //so 'Harmit' or "Harmit" anything is fine
console.log(firstName); //name is exist in global scope only
const lastName='Patel';
console.log(firstName+" "+lastName);  //can use operaters as well to concate both string


//boolean ----> is true and false value
let isLoggedIn=true;    
console.log(isLoggedIn);  //will get true
                          //if it is false then will get false


//if you don't want to put any thing as a value then use NULL.
let lastlogindate=null;      //when you hover this it will sat any means could be come anything
console.log(lastlogindate);  //will get null not a output same like Undefined

let firstLoginDate=undefined;
console.log(firstLoginDate);//it is not here defined means it is undefined


//           diffrence between null and undefined 

//  if any value exists for variable but not for a now then use null.
// but if you wanna delete any thing permenantly then you can undefined it.


// Objects   ----> diffrent in JS , in other languages we make classes and then make object
//                 for that class.

//but, here , you make object diffrently  by using {,} (curly braces)

const person={
    myFirstName:"Harmit",    //object has key,value pair
    myLastName:"Patel",
    myAge:22,
    isLoogedIn:false,
    isLastlogindate:null    //or undefined
} ;  

console.log(person);    //can get whole object as it is




// Operators  -----> can perform any opearators values

//Boolean has only true(1) | false(0)

let wasLoggedIn=true;
console.log(wasLoggedIn+10);  //1+10 will get 11

let wasLoggedIn1=false;
console.log(wasLoggedIn1+10); //0+10 will get 10

if(1){
    console.log(true);    //will get true
    console.log(false);  //will get false  //since if is true
}

if(0){  //since it is false so it can not get inside
    console.log(true);
    console.log(false);  //will not print anything 

}







