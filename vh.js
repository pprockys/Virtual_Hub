let v;

let prelink="https://codeforces.com/contest/";
document.addEventListener("keyup",contestno);

function contestno()
{
    v=document.getElementById("customcontestnumber").value;
}

document.getElementById("butt").addEventListener("click",opencontest);

function opencontest()
{
   if(v>=1 && v<=1359)
   {
    let fulllink=prelink+v;
    window.open(fulllink);
   }
   else if(v==null)
   {
      document.getElementById("para").innerHTML="Sorry! we can not bring this page to you.";
      document.getElementById("parag").innerHTML="";
   }
   else
   {
      document.getElementById("para").innerHTML="Sorry! we can not bring this page to you.";
      document.getElementById("parag").innerHTML="";
   }
}
