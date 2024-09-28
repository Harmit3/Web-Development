//Fuctions in Javascript

//Function is a block of code which performs a particular task


function sayHello(){             //define the function
    console.log("Hey! Harmit");
}

sayHello();    //call the function so get the output
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();     //can call multiple times as well



//add two numbers by functions

function add(num1,num2){     //here,num1 &num2 is arguments
    console.log(num1+num2);
}

add(5,10);  //5 & 10 are parameters
add(2,8);   //parameters assign to arguments


//multiple() function
function multiple(num1,num2){
    return num1*num2
}

let a=multiple(4,3); 
console.log("Multiplication of num1 & num2 is",a);




//make function where you can add as much parameter you wanna
//add & it returns same answer

function sum(){                //nothing to define as arguments if you use arguments keyword
    console.log(arguments);    //arguments is a keyword to contain all parameters from function call

    //arguments:- is a object  so when function receive any parameters from function call it puts it in argumets object and you can see the
    //length of arguments in console window as well.
    //so you can loop it and get the sum of it

    let answer=0;
    for(let i=0;i<arguments.length;i++){
        answer=arguments[i]+answer;
    }

    return answer;
}

let result=sum(100,20,30,40,50,60,10,70,80,90);   //you can add as much arguments you want to add
console.log(result);



//so we can also do this dynamically function using arguments 
//& another way is to do that is by Spread Operators.


//Spread Operators---->using array in JS

function sum1(...numbers){    //here, ...numbers(can name anything) is spread operators
    let ans=0;
    for(let i=0;i<numbers.length;i++){
        ans=ans+numbers[i];
    }
    return ans;
}

let  result1=sum1(10,20,30,40,50,60,70,80,90,100,1,0,2,3);
console.log(result1);



//another way to make function is Arrow functions which is so important,
//which is launched in latest version of JS (called ES6)

