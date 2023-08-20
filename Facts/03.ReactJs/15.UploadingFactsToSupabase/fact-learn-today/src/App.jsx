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
  //Adding new state to toggle category
  const [currentCategory,setCurrentCategory] = useState("all");
  useEffect(function() {
    async function getFacts(){
      setIsLoading(true);
      //creating a query object
      let query = supabase.from('facts').select('*');
      if(currentCategory!=="all")
      {
        //using .eq() function to change the current category when the button is clicked
        query=query.eq("category",currentCategory)
      }
      // const { data: facts, error } = await supabase.from('facts').select('*').eq("category","technology").order("text",{ascending:true}).limit(1000);
      // console.log(facts);
      const { data: facts, error } = await query.order("text",{ascending:true}).limit(1000);

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

//since useEffect function loads only one time while opening the site so when we click a button it wont reload
//and for that we pass the state changing variable to the list so useEffect function gets to know what to change 
  },[currentCategory]);
  return(
    <>
    <Header setForm={setForm} showForm={showForm}/>
    {/* {showForm?<NewFactForm facts={facts} setFacts={setFacts} setForm={setForm}/>:null} */}
    {showForm?<NewFactForm facts={facts} setFacts={setFacts} setForm={setForm}/>:null}
    <main className="grid-container">
      {/* passing the setCurrentCategory state function as a prop to CategoryFilter component */}
        <CategoryFilter setCurrentCategory={setCurrentCategory}/>
        {isLoading ? <Loader/>:<Factslist facts={facts}/>}
        
        {/* <Factslist facts={facts}/> */}
    </main>
    </>
    )
}
function Loader()
{
  return <p className='message'>Loading your facts,Please Wait for facts...</p>
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
  async function handleSubmit(e)
  {
    //1.prevent the browser reload
    e.preventDefault();
    console.log(text,source,category);
    //2.Check if the data is valid,if so create a new fact
    if(text && isValidUrl(source) && category && textLength<=200)
    {
      // console.log("Valid");
      // 3.Create a new fact object
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

      //3.5 Upload fact to supabase and receive facts
      // const {data:newFact,error}= await supabase.from("facts").insert([{text,source,category}]).select();
    //4.Add the fact to the UI:add the fact to state
      console.log(newFact);
     
      //  setFacts((facts)=>[newFact,...facts]);/
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
            <option value="">Choose category</option>
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

function CategoryFilter({setCurrentCategory})
{
  return (
    <aside>
      <ul>
        <li className="category-list">
          <button className="btn btn-all-categories" onClick={()=>setCurrentCategory("all")}>
            All
          </button>
        </li>
        {
          CATEGORIES.map(
            (cat)=>
            <li className="category-list" key={cat.name}>
              <button className="btn btn-category" style={{backgroundColor:cat.color}} onClick={()=>setCurrentCategory(cat.name)}>
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
  if(facts.length===0)
  {
    return <p className='message'>No facts for this category , pls create a fact😊</p>;
  }
  // const facts=initialFacts;
  return (
    <section>
      <ul className="facts-list">
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


