let c=0;
document.getElementById("dec").onclick = function(){
    c=c-1;
    if (c<=0){
        c=0;
    }
    document.getElementById("count").innerHTML=c;
}
document.getElementById("inc").onclick = function(){
    c=c+1;
    document.getElementById("count").innerHTML=c;    
}
document.getElementById("reset").onclick = function(){
    c=0;
    document.getElementById("count").innerHTML=c;
}
