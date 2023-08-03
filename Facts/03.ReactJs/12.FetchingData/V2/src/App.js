import './style.css';
import {useState} from 'react'
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App()//first component
{
  const appTitle="Fact learn today";
  return (
    <>
    {/* HEADER */}
  <header className="header1">
    <div className="Logo">
      <img src="logo.png" height="68" width="68" alt="Fact-learn-Today Logo"/>
      <h1>{appTitle}</h1>
    </div>
    <button className="btn btn-large btn-open">Share a fact Now</button>
  </header>


  <NewFactForm/>
  <main className="grid-container">
  <CategoryFilter/>
  <FactList/>
  <Count/>
  </main>
</>
);
}

function NewFactForm()
{
  return <form className="fact-form">Fact Form</form>
}
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
function CategoryFilter()
{
  return (
  <aside>
    <ul>
    <li className="category-list"><button className="btn btn-all-categories">All</button></li>
    {/* <li className="category-list"><button className="btn btn-category" style={{backgroundColor:"#3b82f6"}}>Technology</button></li> */}
    {CATEGORIES.map((cat)=>(
      <li key={cat.name} className="category-list"><button className="btn btn-category" style={{backgroundColor:cat.color}}>{cat.name}</button></li>
      ))}
    </ul>

  </aside>)
}
function FactList()
{
  //lets create a variable 
  const facts=initialFacts;//temporary variable
  return(
  <section>
    <ul className="facts-list">{facts.map((facts)=><Fact key={facts.id} fact={facts}/>)}
    </ul>
    <p>The total fact in Database are {facts.length} ,you can add more !</p>
  </section>
  )
}
function Fact({fact})
// {console.log(props);
{
  return (
    // <li key={fact.id} className="facts">
    <li  className="facts">
        <p>{fact.text}<a className="source" href={fact.source} target="_blank" rel="noreferrer">(Source)</a></p>
        <span className="category" style={{backgroundColor:CATEGORIES.find((cat)=>cat.name===fact.category).color}}>{fact.category}</span> 
        <div className="vote-buttons">
          <button>👍{fact.votesInteresting}</button>
          <button>🤯{fact.votesMindblowing}</button>
          <button>⛔️{fact.votesFalse}</button> 
        </div>
      </li>
  
    );

}
// Lets Understand state with a example of timer or counting increment 
function Count()
{
  const x = useState(0);
  console.log(x);//This will return two things initial value and function to change state
  //deconstruct the arrray
  let [count,setCount]=useState(0);
  return (
    <div>
      {/* <span style={{fontSize:"40px"}}>0  </span>
      <button className="btn btn-large">Click me</button> */}
      {/* Now suppose we want a functionanlity that when we click button the number chnaged 
      Now if we Were in Plain JavaScript we would use DOM manipulation like below
      
      cont button=document.querrySelector(.btn)
      let num=0;
      button.addEventListner("click",(btn)=>{num=+1;document.querrySelector(span).innerHtml=num;})

      But in react which follows jsx syntax we dont use direct dom manipulation what we do is attach 
      eventlistner directly to tag so in this case since it is a button we will use onClick and then in 
      JSX we use state to change the state of element content and that done by a function in react library
      which is useState
      lets see how to do that
      */}
      <span style={{fontSize:"40px"}}>{count}  </span>
      <button className="btn btn-large" 
      onClick={()=>setCount((count)=>(count+1))}>
        Click me
      </button>
    </div>
     
    )
}
export default App;
