// const btn=document.querySelector(".btn-open");
// const form=document.querySelector(".fact-form");
// // lets add event handler
// btn.addEventListener("click",function(){

//     if(form.classList.contains("hidden"))
//     {
//         //if present then remove the class to show
//         form.classList.remove("hidden");
//        btn.innerHTML="Close";
//     }
//     else
//     {
//         form.classList.add("hidden");
//         btn.textContent="Share a fact";
//     }
// });

// function add2Num(a,b)
// {
//     let add=a+b;
//     return add;
// }
// let a=4;
// let b=6;
// let result = add2Num(a,b);
// console.log(result);
// let votesInteresting=20;
// let votesMindblowing=20;
// votesInteresting=21;
// if(votesInteresting==votesMindblowing)
// {
//     alert("This fact is equally graded as both intresting and mindblowing");
// }


// else if(votesInteresting>votesMindblowing)
// {
//     alert("Fact is interesting");
// }
// votesMindblowing=0;
// if(votesMindblowing)
// {
//     alert("This is a mind blowing fact");
// }
// else{
//     alert("Nothing so special");
// }

// function calcFactAge(year)
// {
    
//     const currentYear = new Date().getFullYear();
//     const age= currentYear - year;
//     if(age>0)
//     {
//         return age;
//     }
//     else
//     {
//         // return "Impossible year";
//         return `Impossible year.Year needs to be less or equal to ${currentYear}`;
//     }

// }
// let age=calcFactAge(2015);
// console.log(age);

// console.log(calcFactAge(2035));

// let votesFalse=7;
// const totalUpvote = votesInteresting+votesMindblowing;

// const message = totalUpvote > votesFalse ? "Fact is Correct":"Might be false ... check your sorce";
// // alert(message);


// const text = "Lisbon is the capital of Portugal";
// const upperText=text.toUpperCase();
// console.log(text, upperText);
// const str = `The current fact is  ${text},It is 
// ${calcFactAge(2015)} years old . It is probably ${totalUpvote > votesFalse ? "true" : "false"}`;

// console.log(str); 

// //Crash course on Arrow function

// let use = (a,b)=>a+b;
// console.log(use(1,2));


// let calcFactAge2=(year)=>new Date().getFullYear()-year > 0?`age is ${new Date().getFullYear()-year}`:"Imposible year";
// console.log(calcFactAge2(2015));
// console.log(calcFactAge2(2025));


//CrashCourse on Arrays
/*
Array are collecion of value but unlike other programming languages where array can only store similar
value in JavaScript array can store mix value inside it , Array are assigned to variable and elements
in array can be accessed using index 

//Lets see how to declare a array:

const Fact=["Lisbon is the capital of Portugal",2015,true];
console.log(Fact);
console.log(Fact[1]);//will give the second element of the array
*/

const Fact=["Lisbon is the capital of Portugal",2015,true];
console.log(Fact);
console.log(Fact[1]);
console.log(Fact.length);


console.log(Fact[Fact.length-1]);


const [text,createdIn,Correct]=Fact;
console.log(text);
console.log(createdIn);
console.log(Correct);

const newFact=[Fact,"society"];
console.log(newFact);

const newFact2=[...Fact,"society"];
console.log(newFact2);

//Crash course on object
//What is  object ?
/*
Ans :- Now please note this object which we will here talk about  is not the same as of the object in OOPS , rather it is 
a data structure just like array ,Now in array which is a collection of value we were not able to give
names to value they were just simple value inserted into array one by one or one after another .

But a Object in JavaScript  is much like a dictionary in Python programming language .
That is a object is a key:value pair 

how to declare a object in JavaScript

let/var/const object_name = {key:value};
*/
// const factObj={text:"Lisbon is the capital of Portugal",
// createdOn:2015,
// TrueOrFlase:true,
// category:"Society"};


// Now We can access the value of the object using two way:
// 1. dot operator(.)
//: object_name.key

//2.Just like array how we used index to access the values in array
//we will use key to access the value in the object
//but we will have to provide the key inside of an double qoute"" that is as a string
// :object_name["key"]



// Now just like array where we 
// use array to declare multiple varibale to store value of another array
//We can use the object to declare multiple variable to store the value of object
//but the name of variable should be equal to the name of the 
//property of value 

/*
const factObj={text:"Lisbon is the capital of Portugal",
createdOn:2015,
TrueOrFlase:true,
category:"Society"};


so if i want to store value 2015 and "Society" in variable 
then the name of variable should be equal to poperty or key of value
*/

// const {createdOn,category}=factObj;
// console.log(`this is the year when fact was created ${createdOn}`)
// console.log(`this is the caategory of fact ${category}`);

// Now inside our object we can pass function as a value too

const factObj={text:"Lisbon is the capital of Portugal",
createdOn:2015,
category:"Society",
isCorrect:true,
summary:function(){
    // this simply is the keyword which means do operation in this object 
return `The fact is ${this.text} is from the category ${this.category.toUpperCase()}`
}
};
console.log(factObj.text);
console.log(factObj["category"]);
console.log(factObj.summary());






