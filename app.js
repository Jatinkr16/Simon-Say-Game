let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let randcolor=["yellow","green","purple","red"];
let highestScore=1;
let backgroundMusic = document.getElementById("backgroundMusic");
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
})

function Gameflash(btn){
    btn.classList.add("Gameflash");
    backgroundMusic.play();
    setTimeout(function(){
        btn.classList.remove("Gameflash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    backgroundMusic.play();
}

function levelup(){
    userseq=[];
    level++;
    backgroundMusic.play();
    h2.innerText=`Level ${level}`;

    let randNum=Math.floor(Math.random()*3);
    let randvalue=randcolor[randNum];
    let randBtn=document.querySelector(`.${randvalue}`);

    gameseq.push(randvalue);
    Gameflash(randBtn);
   // backgroundMusic.play();
}

 function checkAns(idx){
    
        backgroundMusic.play();
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length)
       {

        if (level > highestScore) {
            highestScore = level;
            let h3 = document.querySelector("h3");
            h3.innerHTML = `Highest Score: ${highestScore+1}`;
            
        }
        setTimeout(levelup,300);
       }
    }
    else{
        let loseSound = document.getElementById("loseSound");
        loseSound.play();

        

        h2.innerHTML=`Game over! your score is <b> ${level} <b> <br><br> press any key to start`;
        h2.style.color="red";
        let body=document.querySelector("body");

        body.classList.add("gameover");
        setTimeout(function(){
            body.classList.remove("gameover");
        },150);
      
       resetGame();
    }
 }
function btnpress(){
   let btn =this;
   userflash(btn);

   let getcolor=btn.getAttribute("id");
   userseq.push(getcolor);

   checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btns of allbtns){
    btns.addEventListener("click",btnpress);
}

function resetGame(){
    gameseq=[];
    userseq=[];

    started=false;
    level=0;
}