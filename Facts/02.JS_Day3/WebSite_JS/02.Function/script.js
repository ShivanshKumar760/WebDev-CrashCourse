// To test if javascript file is link with html file or not just make a simple alert() msg

//alert("Welcome to Facts-learn-today");

// SO now we have added the hidden class in form and now we will write a javascript code to toggle
// that hidden class using SHARE A FACT Button 

// So we  will add a event listner 
//so we will use dom document object manipulation :

const btn=document.querySelector(".btn-open");
const form=document.querySelector(".fact-form");
// lets add event handler
btn.addEventListener("click",function(){
    // to test
    //alert("Click");
    if(form.classList.contains("hidden"))
    {
        //if present then remove the class to show
        form.classList.remove("hidden");
       btn.innerHTML="Close";
    }
    else
    {
        form.classList.add("hidden");
        btn.textContent="Share a fact";
    }
});
//variable are container which actually represent the memory location in Machine 
// to access the value stored at that address or memory location

//in js we can create variable using let , var and constant
//where let is scope based variable and var is function based variable and const basically 
//means that it is constant and cant be changed

let votesInteresting= 23;
let votesMindblowing= 5;
const text="Lisbon is the capital of Portugal";
/*
23;
5;
"Lisbon is the capital of Portugal" so this are the value which are classified in different 
data type  and this data type are:

int float char String boolean null and undefined*/

/*
we can manipulate numbers or even strings using operators :

Operators can be arithmetic ,logical ,assignment etc*/
votesInteresting=votesInteresting+1;
console.log(votesInteresting);
let totalUpvotes=votesInteresting+votesMindblowing;
console.log(totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);    

// Function in JavaScript are inbuilt and user defined that is a programmer can define 
// a function by himself and JavaScript comes with own pre written function for the user
/*
like console.log() , .querySelector(".btn-open") , .classList.contains("hidden")

these are some pre built  function in js and a user can define its own function using

the function keyword,

like below :

function add2Num(a,b)
{
    let add=a+b;
    return add;
}*/
function add2Num(a,b)
{
    let add=a+b;
    return add;
}
let a=4;
let b=6;
let result = add2Num(a,b);
console.log(result);

// lets create another function
// To count the age of fact 

function calcFactAge(year)
{
    const currentYear=2023;
    const age= currentYear -year;
    return age;
}
let age=calcFactAge(2015);
console.log(age);

