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
function App() {
  const [showForm,setForm]=useState(false);
  return (
  <>
<header className="header1">
    <div className="Logo">
        {/* <!-- <img src="logo.png" style="height:60px;width:60px;"> --> */}
        <img src="logo.png" alt="Fact-learn-Today-Logo"/>
        <h1>Facts-Learn-Today</h1>
      </div>
    <button className="btn btn-large btn-open" onClick={()=>setForm(!showForm)}>Share a fact</button>
</header>

{showForm ? <NewFactForm/>:null}
<main className="grid-container">
  <CategoryFilter/>
  <FactList/>
</main>
</>
);
}
function NewFactForm()
{
  return <form className="fact-form">Form</form>;
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
      {CATEGORIES.map((cat)=>(
        <li key={cat.name} className="category-list"><button className="btn btn-category" style={{backgroundColor:cat.color}}>{cat.name}</button></li>))}
    </ul>
  </aside>
  )
}
// function FactList()
// {
  
//   return (
//     <section>
//           <ul className="facts-list">
//             <li className="facts">
//               <p>React is being developed by Meta (formerly facebook)<a class="source" href="https://opensource.fb.com/" target="_blank" rel="noreferrer">(Source)</a></p>
//               <span className="category" style={{backgroundColor:"#3b82f6"}}>Technology</span>
//               <div className="vote-buttons">
//                             <button>👍24</button>
//                             <button>🤯9</button>
//                             <button>⛔️4</button>
//               </div>
//             </li>

//             <li className="facts">
//                 <p style={{display: "inline-block"}}>Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%</p>
//                 <span className="category" style={{backgroundColor:"#eab308"}}>society</span>
//                 <div className="vote-buttons">
//                   <button>👍12</button>
//                   <button>🤯2</button>
//                   <button>⛔️0</button>
//                 </div>
//             </li>

//             <li className="facts">
//               <p>Lisbon is the capital of Portugal</p>
//               <span className="category" style={{backgroundColor:"#eab308"}}>society</span>
//               <div className="vote-buttons">
//                 <button>👍8</button>
//                 <button>🤯3</button>
//                 <button>⛔️1</button>
//               </div>
//             </li>
//           </ul>
//      </section>
//     )
// }
function FactList()
{
 const facts=initialFacts; 
  return (
    <section>
          <ul className="facts-list">{facts.map((facts)=><Fact key={facts.id} fact={facts}/>)}</ul>
     </section>
    )
}
function Fact({fact})
{
  return (
    <li  className="facts">
        <p>{fact.text}<a className="source" href={fact.source} target="_blank" rel="noreferrer">(Source)</a></p>
        <span className="category" style={{backgroundColor:CATEGORIES.find((cat)=>cat.name===fact.category).color}}>{fact.category}</span> 
        <div className="vote-buttons">
          <button>👍{fact.votesInteresting}</button>
          <button>🤯{fact.votesMindblowing}</button>
          <button>⛔️{fact.votesFalse}</button> 
        </div>
      </li>
    )
}

export default App;
