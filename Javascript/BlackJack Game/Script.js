let p={name: "J. Doe", chips:200}
let sum=0
let bj=false
let alive = false
let message =""
let m = document.getElementById("message")
let c = document.getElementById("card")
let s = document.getElementById("sum")
let pl = document.getElementById("player")

pl.textContent = p.name+": $"+p.chips
let c1 =10
let c2=4
let cards =[c1,c2]
sum = cards[0]+cards[1]

function start(){
    alive=true
    let c1=rand()
    let c2=rand()
    cards=[c1,c2]
    sum=c1+c2
    cont();
}

function cont(){
    c.textContent="Cards: "
    for(let i =0;i<cards.length;i++){
        c.textContent+=cards[i]+" "
    }
    s.textContent="Sum: "+sum;
    if(sum<21){
        message="Try again?"
    }
    else if(sum===21){
        message="You win"
        bj = true;
    }
    else{
        message="You lose"
        alive = false
    }
    m.textContent=message;
}

function rand(){
    let n = Math.floor(Math.random()*13)+1
    return n
}

function card(){
    if(alive===true && bj===false){
        let c3 = rand()
        cards.push(c3)
        sum+=c3
        cont()
    }
}
