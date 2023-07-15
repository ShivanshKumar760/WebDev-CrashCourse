const btn=document.querySelector(".btn-open");
const form=document.querySelector(".fact-form");
// lets add event handler
btn.addEventListener("click",function(){

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

function add2Num(a,b)
{
    let add=a+b;
    return add;
}
let a=4;
let b=6;
let result = add2Num(a,b);
console.log(result);
let votesInteresting=20;
let votesMindblowing=20;
votesInteresting=21;
if(votesInteresting==votesMindblowing)
{
    alert("This fact is equally graded as both intresting and mindblowing");
}


else if(votesInteresting>votesMindblowing)
{
    alert("Fact is interesting");
}
votesMindblowing=0;
if(votesMindblowing)
{
    alert("This is a mind blowing fact");
}
else{
    alert("Nothing so special");
}

function calcFactAge(year)
{
    
    const currentYear = new Date().getFullYear();
    const age= currentYear - year;
    if(age>0)
    {
        return age;
    }
    else
    {
        // return "Impossible year";
        return `Impossible year.Year needs to be less or equal to ${currentYear}`;
    }

}
let age=calcFactAge(2015);
console.log(age);

console.log(calcFactAge(2035));

let votesFalse=7;
const totalUpvote = votesInteresting+votesMindblowing;

const message = totalUpvote > votesFalse ? "Fact is Correct":"Might be false ... check your sorce";
// alert(message);


const text = "Lisbon is the capital of Portugal";
const upperText=text.toUpperCase();
console.log(text, upperText);
const str = `The current fact is  ${text},It is 
${calcFactAge(2015)} years old . It is probably ${totalUpvote > votesFalse ? "true" : "false"}`;

console.log(str); 

//Crash course on Arrow function
/*
Ordinaraly in order to declare a function in JavaScript :

we use function keyword followed by the function name and passing parameters if we need and 
then adding two braces and writing code in it like below:

function add2(a,b)
{
    return a+b;
}

but there is another way to declare a function in JavaScript and that is the use of arrow function 
in JavaScript 

A arrow function is directly used to assign value of function result to variable without using
return keyword and we dont have to use function keyword also in order to declare a function

let variable_name = (parameter)=>statment;*/

let use = (a,b)=>a+b;
console.log(use(1,2));

/*
function calcFactAge(year)
{
    
    const currentYear = new Date().getFullYear();
    const age= currentYear - year;
    if(age>0)
    {
        return age;
    }
    else
    {
        // return "Impossible year";
        return `Impossible year.Year needs to be less or equal to ${currentYear}`;
    }

}*/

//Now we can replicate the above function as well using the arrow function but since inisde 
//arrow function we cant use if and else as it will direct give result to variable 
//we will use ternary operator

let calcFactAge2=(year)=>new Date().getFullYear()-year > 0?`age is ${new Date().getFullYear()-year}`:"Imposible year";
console.log(calcFactAge2(2015));
console.log(calcFactAge2(2025));

// Note we can use return keyword in arrow function but that will become too complicated and if
// we do want to use return keyword it would be better to use the Normal function.











