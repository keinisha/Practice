// Javascript
let a,b,c;
document.getElementById("bc").onclick=function(){
    a=document.getElementById("a").value;
    a=Number(a);
    b=document.getElementById("b").value;
    b=Number(b);
    c=" ";
    c=document.getElementById("c").value;
    c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("c").value=c; 
}
document.getElementById("ba").onclick=function(){
    c=document.getElementById("c").value;
    c=Number(c);
    b=document.getElementById("b").value;
    b=Number(b);
    a=" ";
    a=document.getElementById("a").value;
    a= Math.sqrt(Math.pow(c,2)-Math.pow(b,2));
    document.getElementById("a").value=a; 
}
document.getElementById("bb").onclick=function(){
    c=document.getElementById("c").value;
    c=Number(c);
    a=document.getElementById("a").value;
    a=Number(a);
    b=" ";
    b=document.getElementById("a").value;
    b= Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
    document.getElementById("b").value=b; 
}
