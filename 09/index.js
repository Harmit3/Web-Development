//High Order Function  -----> a function which takes arguments as a function called high order function.

/*

function add(a,b,){
    return a+b;
}
console.log(add(2,4));  //normal function but how we can do it by high order or call back function
//for eg:- addition is a task who takes time because we need to bring that arguments to API and then need to do some work.

*/

function add(a,b,cb){  //cb stands for callback and add is high order function
    let result= a+b;   //IT IS USEFUL WHEN A+B TAKES TIME (10 S) AND AFTER IT SAVES RESULT IN CALL BACK SO DON'T WASTE TIME HERE
    cb(result);
}

function showResult(result){ //showResult is Callback function
  console.log(result);
}

add(2,4,(val)=>{console.log(val)});
add(5,6,val=>console.log(val));
    
    
//shortcut to do is you add function in parameter
/*
    add(2,4,function(val){
     console.log(val);
    });  


    OR 
    add(2,4,(val)=>{console.log(val)});
    

    OR 
    add(2,4,val=>console.log(val));


*/








/*

{ //because here it accept function as an arguments 
    console.log(val);  //here,2 & 4 will save in result and function will print it as an arguments
});
showResult(4);   ---->  call function and print result
*/


// FUNCTION CAN ALSO RETURN FUNCTION AS WELL

function add1(a,b,cb){
    let result=a+b;
    cb(result);

    return ()=>console.log(result);    //can also write ()=>{console.log(result)}; OR  return function(){console.log(result)};
}

//add1(2,3,undefined)
//or don't make callback leave an empty function

let resultFunction=add1(2,4,()=>{});   //will not print anything on console 
//to print we need to call resultFunction 
resultFunction();