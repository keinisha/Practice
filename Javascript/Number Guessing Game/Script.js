const a = Math.floor(Math.random()*10+1);
let g =0;
document.getElementById("sub").onclick=function(){
    let guess=document.getElementById("in").value;
    g+=1;
    if(guess==a){
        alert(`${a} is the number. It took you ${g} trys`); //tilde used to add var values in string
    }
    else if (a<guess){
        alert("guess again, try smaller");
    }
    else{
        alert("guess again, try bigger");
    }
}
