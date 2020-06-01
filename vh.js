let v;
let prelink="https://codeforces.com/contest/";
document.addEventListener("keyup",contestno);

function contestno()
{
    v=document.getElementById("customcontestnumber").value;
}
if(v<1 || v>1359)
{
    window.alert("Sorry this doesn't exist");
}
else
{

  document.getElementById("butt").addEventListener("click",opencontest);
  function opencontest()
  {
   let fulllink=prelink+v;
   window.open(fulllink);
  }
}