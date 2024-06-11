let timer = 60;
let score = 0;
let hit = 0;


function newscore(){
score += 10;
document.querySelector("#score").textContent= score;

}
function minusscore(){
score -= 10;
document.querySelector("#score").textContent= score;

}



function newhit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=hit;
}

let rh= newhit;
function makeloon(){
    let loon = "";
    for (i=1;i<109;i++){
        let rn = Math.floor(Math.random()*10)
                    
        loon += `<div id="bubble">${rn}</div>`
    }
    
    document.querySelector("#pbottom").innerHTML = loon;
}


function runtimer(){
    let timerint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML= ` <h2>Game Over</h2> <h2>Your Score : ${score}</h2> `
        }
    },1000);
}

document.querySelector("#pbottom").addEventListener("click",function(e){
let clicknum = Number(e.target.textContent);
if(clicknum==hit){
    newhit();
    newscore();
    makeloon();

}
else{
    minusscore();
    newhit();
    makeloon();
}
})


newhit();
runtimer();
makeloon();