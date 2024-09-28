// same syntex as like another programming languages

//if(){  ..........}
//else if() {..........}
//else if() {..........}
//else     {..........}



const age=22;
if(age>=18){
    console.log("Yes, You can vote.");
}
else if(age>=100){
    console.log("Yes, you are adult.")
}
else{
    console.log("No,You can not vote.");
}



// short form to write else if is called "ternary operator"
//can use only if your answer is only true or false 
//for eg:- age >18 then eligable for vote otherwise not eligable for vote
const age1=2;

//long form
//  if(age1>=18{
//      console.log("Yes");
//    }
//  else{
//      console.log("No");
//    }


//syntex is condition:if true:if false
age1>=18?console.log("True"):console.log("false");

//or you can assign to variable and then print
let result=age>=18?'Yes':'No';
console.log(result);


//switch case


const option=4;

switch(option){

    case 1:
        console.log("Namste");   //if break statement is not there
        break;                   //then all cases will print on console
    case 2:           
        console.log('Hello');
        break;
    case 3:
        console.log("Bounjur");
        break;
    default:
        console.log("Invalid Option");

}



//switch case another example

let a=30;
let opration="-";
let b=40;

switch(opration){
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
     case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;

}

