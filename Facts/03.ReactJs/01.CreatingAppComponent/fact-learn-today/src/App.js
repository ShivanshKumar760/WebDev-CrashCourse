import './style.css'
//So now when we use plain javascript which is vanila JavaScript we make html file to structure ,css file to
//style and JavaScript file to provide functionality to html element But in React we actually instead of
// using Html in another file we write html as component ie html tag inside function of JavaScript

// So suppose we want to write a heading we can make a header function for it like below
/*
function header()
{
  return <h1>Hello</h1>;
}
//And then we can make make a paragraph function with pargraph tag

function para()
{
  return <p>This is ReactJS</p>;
}*/
// function header()
// {
//   return <h1>Hello</h1>;
// }
// function para()
// {
//   return <p>This is ReactJS</p>;
// }
// function App() {
//   return <h1>Hello , World</h1>;
// }

// export default App;


function App()//first component
{
  return (<header className="header1">
  <div className="Logo">
    {/* Remember to give a forward slash / in self closing tag cause unlike HTMl ReactJS dosent know 
    if tag is self closing or not so give a / at end of (>) of a self closing tag */}
      <img src="logo.png" height="68" width="68" alt="Fact-learn-Today Logo"/>
      {/* And also try to givem important attribute like alt in reactjs to tag to avoid error */}
      <h1>Facts-Learn-Today</h1>
  </div>
  <button className="btn btn-large btn-open">Share a fact Now</button>
</header>)
// Now them code we wrote above inside the return() is not HTML although it looks like html cause we copied
// pasted it from the index.html of our V1 project but this syntax is known as JSX which looks similar to HTML 
// When Compiling The JSX will be converted to JavaScript Function 

// Now there are many differenc b/w jsx and html and one of them as we can see is in JSX we dont use class
//as it is a keyword reserved by JS so we use className instead
}
//Return One element form each component only else it will return error


//Now we will have to export this function from App.js to index.js 
export default App;