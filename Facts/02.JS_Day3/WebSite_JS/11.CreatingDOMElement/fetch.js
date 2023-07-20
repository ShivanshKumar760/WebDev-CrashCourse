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
  console.log(data);
  createFact(data)
  }
  
  loadFacts();
  
  