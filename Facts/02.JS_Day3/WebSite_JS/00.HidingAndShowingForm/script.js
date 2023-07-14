// To test if javascript file is link with html file or not just make a simple alert() msg

//alert("Welcome to Facts-learn-today");

// SO now we have added the hidden class in form and now we will write a javascript code to toggle
// that hidden class using SHARE A FACT Button 

// So we  will add a event listner 
//so we will use dom document object manipulation :

const btn=document.querySelector(".btn-open");
const form=document.querySelector(".fact-form");
// lets add event handler
btn.addEventListener("click",function(){
    // to test
    //alert("Click");
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