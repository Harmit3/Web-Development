//Loical Operators

//AND,OR,NOT      &&,||,!               &(single and is logical and)

//For rg:- if you you wanna make the program for wheather are you a teenager or adult

const age=20;
const gender='male';

if(age>=20 && gender=='male'){   //all conditions must be true
    console.log("You are a audult male");
}


//For rg:- In OR any oen should be true  (OR---->||)

if(age>=20 || gender=='female'){       //any one condition need to be true
    console.log("You are a adult female."); 
}


// = is assignment  & == is comparision  , == returns boolean value(0 or 1)
// if age is true(1) or gender is false(0), then will get true(1) which should be return true(1)

let isMale=gender=='Male'; //isMale is boolean
//isMale

//NOT makes true to false and false to true
//for eg:- check wheather number is oodd or even
const number=5;
if(number%2!=0){
    console.log("It is odd");
    
    
}
else{
    console.log("It is even");
}
