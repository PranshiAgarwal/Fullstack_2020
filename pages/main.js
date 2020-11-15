// Selectors

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const date = document.getElementById('date');

// Event Handler
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

// Functions

function showtime()
{
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString(); 
// AM and PM
    const amPm = hour > 12 ? 'PM' : 'AM';
    // 12 hours format
    hour = hour%12 || 12;
    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    date.innerHTML = `${todaydate}`;
    setTimeout(showtime, 1000);
}
function addZero(n)
{
    return((parseInt(n,10)<10 ? '0' : '')+n);
}
function setGreeting()
{
   let today = new Date();
   let hour = today.getHours();
   if(hour<12)
   {
       document.body.style.backgroundImage = 'url("../Images/morning.jpg")';
       greeting.innerHTML = "Good Morning";
   }
    else if(hour<18)
   {
       document.body.style.backgroundImage = 'url("../Images/afternoon.jpg")';
       greeting.innerHTML = "Good Afternoon";
   }
   else
   {
       document.body.style.backgroundImage = 'url("../Images/night.jpg")';
       greeting.innerHTML = "Good Evening";
       document.body.style.color = "white";
   }
}
function getName()
{
    if(localStorage.getItem('mykeyname')===null)
    {
        name.innerHTML = '[Enter Name]';
    }
    else
    {
        name.innerHTML = localStorage.getItem('mykeyname');
    }
}
function setName(e)
{
if(e.type==="keypress")
{
     if(e.keyCode==13)   // Enter key press
     {
        localStorage.setItem("mykeyname",e.target.innerHTML);
        name.blur();
     }
}
else   //blur event
{
    localStorage.setItem("mykeyname",e.target.innerHTML);
}
}

// Function's Call
showtime();
setGreeting();
getName();
