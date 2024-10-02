console.log("testing");

var age=22;
console.log(age); //will print the age in console

var num1=10;
var num2=20;
console.log(num1+num2);  //can get the sum for var1 and var2


//c,c++,java is strongly typed language which means for any variable need to ddefind int,float
//JS--->is loosely typed language where data type assign  dynamically and store
//      any thing. Dont need to define data type.



//you can also do 
var age="Harmit";
console.log(age);   //will print Harmit


//var's scope is global  -->introduced in older vesion of JS
if(true){
    var age=15;  //age changed to 15 instead of Harmit
    console.log(age);
    var age1=23;
    console.log(age1);
}

console.log(age1); //will also print here
console.log(age);  //will print 15 here

console.log(age2);   //will get error  that age2 is not define 
var age2=15;        //after define it will not give error but no output (just get undefined)
console.log(age2);  //will get output on console now



//let & const has local scope -->introduced in newer vesion of JS

let age3=25;          //you can define this two times (loop hole)
console.log(age3);
if(true)
{
   let age3="Harmit";
   console.log(age3); //will print Harmit
}

console.log(age3);   //will print 25 as Harmit is for local scope only for let



//const also has similiar value like let but can't change it's value once it is defined and while declaring we must need to define it.
//cant leave it like const age;
const age4=26;
console.log(age4);
age4=27;
console.log(age4);  //will give error that Assignment to constant variable

