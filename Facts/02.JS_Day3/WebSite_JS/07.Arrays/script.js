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
console.log(Fact[1]);//will give the second element of the array

// we can find the length of array using the .length function or we can say object
console.log(Fact.length);
// Now if suppose we dont know the size of array and we have to access the last element of the array
// we can use the .length function to find the size of the array and then we can do -1 on the length of the 
//array cause indexing is done from 0 to length-1

console.log(Fact[Fact.length-1]);
// Now we can also use array to declare multiple varibale to store value of another array
//like beloe 

const [text,createdIn,Correct]=Fact;
console.log(text);
console.log(createdIn);
console.log(Correct);
// We can also store array element inside another array without actually iterating through
//Now how can we do that
//So the very first idea would be to directly store the Fact variable in the array 
const newFact=[Fact,"society"];
console.log(newFact);
// Well technically it's not wrong cause it will store the Fact variable array  element inside the array
//newFact array but they will get stored with array that is a array inside array like below:
// [ [ 'Lisbon is the capital of Portugal', 2015, true ], 'society' ]
// But we dont want the array inside another array we just want to store the elements of arrray 1 in
//array 2 without iterating through the array

// for that we can use the spread operator which is 3 triple dot (...) which  unpacks the array element
// inside the new array 
const newFact2=[...Fact,"society"];
console.log(newFact2);







