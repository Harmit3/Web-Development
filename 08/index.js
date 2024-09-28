//Arrow Functions

//1.Syntax

/*

simple function syntax

function sayHello(){
    console.log("Hello! Harmmit");
};
sayHello();

*/


//arrow function is pretty similar to function
const sayHello=()=>{
    console.log("Hello! Harmmit");
};
sayHello();


//arguments in arrow function looks like below

//shortcut for add arrow function is  const add=(a,b)=>a+b;   (useful when you only have 1 statement in body otherwise nee to use paranthesis {}
//and need to use all the eay that we write.)
//so when you don't use paranthesis it become returns itself so dont need to write return as well. 
const add=(a,b)=>{
    return a+b;
}

let result=add(6,4);
console.log(result);


//2.'arguments' keyword is not defined in aroow function if you use,
//it will give error that arguments is not defined.So,you onlt have option to use
//spread operator

 
function add1(){
       let sum=0;
       for(let k=0;k<arguments.length;k++){
         sum=sum+arguments[k];
       }
      return sum;
}
let result1=add1(1,2,3,4,5,6,7,8,9,10);
console.log(result1);

//can use spread operators for unlimite paramaeters 
const addNumbers=(...numbers)=>{
     let ans=0;
    for(let i=0;i<numbers.length;i++){
        ans=numbers[i]+ans;
    }
    return ans;
}
console.log(addNumbers(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15));


/*
const addNumbers=()=>{
    console.log(arguments);
};
addNumbers(1,2,3,4,5,6,7,8,9,10);
*/



//3.Hoisting

sayHey();  
//first we call the function and then define & still you can see the output this is called hoisting.
// So,js already put function in memory first and then if you define earlier or later it will be work.
//It is only works for normal function.Not for arrow function.


function sayHey(){
    console.log("Hey! there");
}



/*
let sayHey=()=>{                          //will give error(no hoisting)
  console.log("Hey!, there");
};
*/




//4.This keyword

const obj={
  value:20,                    //object has key:value
  myFunction:function(){       //here,we make object with value and function and try to
    console.log(this);         //get that value in function and print it outside of that object by calling that object
  },                           //this.value -----> give output 20 & this refer to object but if only value is there then it will give error 
                               //cause value is not defined.
};
obj.myFunction();


// this refer to this object in normal function but if you might have arroe function then it refer to whole screen of browser and give output
// refer to Window(browser window object) because arrow function has global scope and it is refer to global object.

//this.value -------> gives value is undefined as output.

/*
const obj={
    value:20,                     //object has key:value
    myFunction:()=>{        //here,we make object with value and function and try to
      console.log(this);    //get that value in function and print it outside of object by calling that object
    },
  };
  obj.myFunction();
*/