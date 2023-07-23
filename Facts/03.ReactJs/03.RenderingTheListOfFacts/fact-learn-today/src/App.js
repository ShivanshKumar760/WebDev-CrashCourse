
import './style.css';

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
  </main>
</>
);
}

function NewFactForm()
{
  return <form className="fact-form">Fact Form</form>
}
function CategoryFilter()
{
  return (<aside>CategoryFilter</aside>)
}
function FactList()
{
  //lets create a variable 
  const facts=initialFacts;//temporary variable
  return(
  <section>
    {/* <ul className="facts-list">{facts.map((facts)=>(<li>Facts</li>))}</ul> */}
    <ul className="facts-list">{facts.map((facts)=>(
      <li key={facts.id} className="facts">
        <p>{facts.text}<a className="source" href={facts.source} target="_blank" rel="noreferrer">(Source)</a></p>
        {/* <span className="category" style={{backgroundColor:"#3b82f6"}}>{facts.category}</span> */}
        <span className="category" style={{backgroundColor:CATEGORIES.find((cat)=>cat.name===facts.category).color}}>{facts.category}</span> 
        <div className="vote-buttons">
          <button>👍{facts.votesInteresting}</button>
          <button>🤯{facts.votesMindblowing}</button>
          <button>⛔️{facts.votesFalse}</button> 
        </div>
      </li>))}
    </ul>
  </section>
  )
}
export default App;
