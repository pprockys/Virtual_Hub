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
   let fulllink=prelink+v;
   window.open(fulllink);
}