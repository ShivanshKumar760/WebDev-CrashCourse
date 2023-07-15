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
    else{
        return "Impossible year";
    }

}
let age=calcFactAge(2015);
console.log(age);

console.log(calcFactAge(2035));

let votesFalse=7;
const totalUpvote = votesInteresting+votesMindblowing;

const message = totalUpvote > votesFalse ? "Fact is Correct":"Might be false ... check your sorce";
alert(message);

//Strings crash course 
/*
String is a group of character forming a word or sentence inside a double quote " "

Example to declare a string

const text = "Lisbon is the capital of Portugal";

Now we can call function onto this string also using a dot(.) operator

like suppose we want to transform the string into uppercase for that we use a pre define method

const upperText=text.toUpperCase();
*/
const text = "Lisbon is the capital of Portugal";
const upperText=text.toUpperCase();
console.log(text, upperText);









