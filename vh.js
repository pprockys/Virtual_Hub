let prelink="https://codeforces.com/contest/";
let v1;
function storecontestnumber()
{
    v1=document.getElementById("customcontestnumber").value;
}
function openvirtualpage()
{
    if(v1<1 || v1>1359)
    {
        alert("Sorry! I can not bring that page for you.");
    }
    else
    {
        let completelink=prelink + v1;
        window.open(completelink);
    }
}