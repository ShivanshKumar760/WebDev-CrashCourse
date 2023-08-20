import './style.css'
import {useEffect, useState} from 'react'
import supabase from './supabase';
// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

function App() {
  const [showForm,setForm]=useState(false);
  // const [facts,setFacts]=useState(initialFacts);
  const [facts,setFacts]=useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(function() {
    async function getFacts(){
      setIsLoading(true);
      const { data: facts, error } = await supabase.from('facts').select('*').order("text",{ascending:true}).limit(1000);
      // console.log(facts);
      console.log(error);
      if(!error)
      {
        setFacts(facts);
      }
      else
      {
        alert("there was a problem loading data");
      }
      setIsLoading(false);
    }
    getFacts();


  },[]);
  return(
    <>
    <Header setForm={setForm} showForm={showForm}/>
    {/* {showForm?<NewFactForm facts={facts} setFacts={setFacts} setForm={setForm}/>:null} */}
    {showForm?<NewFactForm facts={facts} setFacts={setFacts} setForm={setForm}/>:null}
    <main class="grid-container">
        <CategoryFilter/>
        {isLoading ? <Loader/>:<Factslist facts={facts}/>}
        
        {/* <Factslist facts={facts}/> */}
    </main>
    </>
    )
}
function Loader()
{
  return <p className='message'>Loading your facts...</p>
}
function Header({setForm,showForm})
{
  return(
    <header className="header1">
    <div className="Logo">
      <img src="logo.png" alt="Fact-learn-today logo"/>
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
function NewFactForm({setFacts,setForm})
{
  const [text,setText]=useState("");
  const textLength=text.length;
  const [source,setSource]=useState("");
  const [category,setCategory]=useState("");
  function handleSubmit(e)
  {
    //1.prevent the browser reload
    e.preventDefault();
    console.log(text,source,category);
    //2.Check if the data is valid,if so create a new fact
    if(text && isValidUrl(source) && category && textLength<=200)
    {
      // console.log("Valid");
      //3.Create a new fact object
      const newFact=
      {
      id:Math.round(Math.random()*1000000),
      text,
      source,
      category,
      votesInteresting:0,
      votesMindblowing:0,
      votesFalse:0,
      createdIn:new Date().getFullYear(),};
    //4.Add the fact to the UI:add the fact to state
     
       setFacts((facts)=>[newFact,...facts]);
    //5.Reset input field
      setText("");
      setSource("");
      setCategory("");
    //6.Close the fields
      setForm(false);
    }
    
  }
  return (
    <form className="fact-form" onSubmit={(handleSubmit)}>
       <input type="text" placeholder="share a fact with the world" value={text}  
       onChange={(e)=>setText(e.target.value)}/>

       <span>{200-textLength}</span>

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
        <li class="category-list"><button class="btn btn-all-categories">All</button></li>
        {
          CATEGORIES.map(
            (cat)=>
            <li className="category-list" key={cat.name}>
              <button className="btn btn-category" style={{backgroundColor:cat.color}}>
                {cat.name}
              </button>
            </li>

            )
        }
      </ul>
    </aside>
    );
}
function Factslist({facts})
{
  // const facts=initialFacts;
  return (
    <section>
      <ul class="facts-list">
        {facts.map(
          (facts)=><Fact key={facts.id} fact={facts}/>
          )
        }
      </ul>
    </section>
    )
}
function Fact({fact})
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
