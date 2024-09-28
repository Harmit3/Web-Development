//Loops inside JS --->For,While, Do while

//also have loops .forEach & .map

//used loops to work repeatly like wanna print your name 10 times

//For loop use when you know how many times result should print on console
//For eg:- Wanna print your name 10,000 times

for(let i=0;i<10;i++){          //initialize,condition until where to learn,increment it
    console.log("Harmit"+i);    
}


//WHILE LOOP
//useful when you know that I want to gain this output but don't know that to gain that output how much iteration you need
//then use while loop

let ip=0;
let house=100;
while(ip!=house){
    ip=ip+1;
    console.log("Steps taken"+ip);
    //after reach at house it would come out from while loop
}


//do-while is similar to while loop.
//In while loop, we check the condition and then execute the code
//Howevr, Inn do-while, we execute the code first and then check the condition
let postion=0;
let home=100;
do{
   postion=postion+1;
   console.log('Steps Taken'+postion);
}while(postion<=home)



//Guess the input Game (usecase why do while is important)

let number=40;   //number is 40
let guuess=0;   //first guess is 0

do {
    guess=parseInt(prompt('Guess a number'));  //come in console that guess a number and user will guess that number 
    //promt always returns a string so need to convert it into a number   '1'--->1
    //can do guess=prompt('Guess a number')+1; or use parseInt

    if(guess==number){
       alert("You are a winner!");
        break;
    }
}while(guess!=0);