
import './style.css';

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
  return <section>Fact-List</section>
}
export default App;
