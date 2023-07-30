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
  const [showForm, setForm]=useState(false);
  return (
    <>
      <Header showForm={showForm} setForm={setForm}/>
      {/* <NewFactForm/> */}
      {showForm?<NewFactForm/>:null}
      <main className="grid-container">
        <CategoryFilter/>
        <FactList/>
      </main>
    </>
    )
}
function Header({showForm,setForm})
{
  return (
    <header className="header1">
      <div className="Logo">
        <img src="logo.png" alt="Fact-Learn-Today Logo"/>
        <h1>Facts-Learn-Today</h1>
      </div>
      <button className="btn btn-large btn-open" onClick={()=>setForm(!showForm)}>
        Share a fact
      </button>
    </header>
    )
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
function isValidUrl(string)
{
  let url;
  try{url =new URL(string);}
  catch(_){return false;}
  return url.protocol==="http:"||url.protocol==="https:"
}
function NewFactForm()
{
  const [text,setText]=useState("");
  const textLenght=text.length;
  const [source,setSource]=useState("");
  const [category,setCategory]=useState("");
  function handleSubmit(e)
  {
    //1.prevent the browser reload
    e.preventDefault();
    console.log(text,source,category);
    //2.Check if the data is valid,if so create a new fact
    if(text && isValidUrl(source) && category && textLenght<=200)
    {
      // console.log("Valid");
      //3.Create a new fact object
      const newFact={id:Math.round(Math.random()*1000000),
      text,
      source,
      category,
      votesInteresting:0,
      votesMindblowing:0,
      votesFalse:0,
      createdIn:new Date().getCurrentYear(),};
    //4.Add the fact to the UI:add the fact to state

    //5.Reset input field

    //6.Close the fields
    }
    
  }
  return (
    <form className="fact-form" onSubmit={(handleSubmit)}>
       <input type="text" placeholder="share a fact with the world" value={text}  
       onChange={(e)=>setText(e.target.value)}/>

       <span>{200-textLenght}</span>

       <input type="text" placeholder="Trustworthy source..." value={source} 
       onChange={(e)=>setSource(e.target.value)}/>

       <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Choose category</option>"
            {
              CATEGORIES.map(
                (cat)=>
                <option value={cat.name} key={cat.name}>
                  {cat.name.toUpperCase()}
                </option>)
            }
        </select>
        <button className="btn btn-large">Post</button>
    </form>
    )
}
function CategoryFilter()
{
  return (
    <aside>
      <ul>
      <li className="category-list"><button className="btn btn-all-categories">All</button></li>
        {
        CATEGORIES.map(
        (cat)=>
          <li className="category-list" key={cat.name}>
            <button className="btn btn-category" style={{backgroundColor:cat.color}}>{cat.name}</button>
          </li>
        )
        }
      </ul>
    </aside>
    )
}
function FactList()
{
  const facts=initialFacts;
  return (
    <section>
        <ul className="facts-list">
          {facts.map((facts)=><Facts key={facts.id} fact={facts}/>)}
        </ul>
    </section>
    )
}
function Facts({fact})
{
  return (
    <li className="facts">
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
