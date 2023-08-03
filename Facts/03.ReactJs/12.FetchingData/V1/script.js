const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selecting DOM elements
const btn=document.querySelector(".btn-open");
const form=document.querySelector(".fact-form");
//creating DOM elements to Render facts in list
const factsList=document.querySelector(".facts-list");


factsList.innerHTML="";

function createFact(dataArray)
{
const htmlArr=dataArray.map(
  (fact)=>`
  <li class="facts">
    <p>${fact.text}<a class="source" href="${fact.source}" target="_blank">(Source)</a></p>
    <span class="category" style="background-color:${CATEGORIES.find((cat)=>cat.name===fact.category).color};">
    ${fact.category}
    </span>
  </li>`
  )
const html=htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin",html);
}
//Load data from supabase
// const res=fetch("https://xocofdchlyuaugdwjgbh.supabase.co/rest/v1/facts",{
//   headers:{
//     apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY29mZGNobHl1YXVnZHdqZ2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNjUwNDYsImV4cCI6MjAwNDg0MTA0Nn0.MZ1TMxAaWpyyvu-aiA26qSMZLQJZSbYOPEyprig0_Ys",
//     authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY29mZGNobHl1YXVnZHdqZ2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNjUwNDYsImV4cCI6MjAwNDg0MTA0Nn0.MZ1TMxAaWpyyvu-aiA26qSMZLQJZSbYOPEyprig0_Ys"
//   }
// });
// console.log(res);//this will return a promise a future value cause fetch takes time to load data from database,we can prevent it with async function

async function loadFacts(){
  const res=await fetch("https://xocofdchlyuaugdwjgbh.supabase.co/rest/v1/facts",{
  headers:{
    apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY29mZGNobHl1YXVnZHdqZ2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNjUwNDYsImV4cCI6MjAwNDg0MTA0Nn0.MZ1TMxAaWpyyvu-aiA26qSMZLQJZSbYOPEyprig0_Ys",
    authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY29mZGNobHl1YXVnZHdqZ2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNjUwNDYsImV4cCI6MjAwNDg0MTA0Nn0.MZ1TMxAaWpyyvu-aiA26qSMZLQJZSbYOPEyprig0_Ys"
  }
});
const data=await res.json();
// console.log(data);

//filter demo
// const filterData = data.filter((fact)=>fact.category==="society");
// createFact(filterData);

//find demo
// const findData = data.find((fact)=>fact.category==="technology");
// createFact([findData]);

createFact(data);


}

loadFacts();



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


     