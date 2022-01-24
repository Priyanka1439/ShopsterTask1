const rock= document.getElementById('rock');
const paper= document.getElementById('paper');
const scissors= document.getElementById('scissors');
const score = document.querySelector('.score');
const mainDiv = document.querySelector('main');

let scoreCount=0;


const output1= document.getElementById('output1');
const output2= document.getElementById('output2');
const Computer= document.querySelector('.Computer');
const imgcomputer= document.querySelector('.imgcomputer');
let btnPlayAgain = document.querySelectorAll('.playAgain')

const divPlayerChoice = document.querySelector('.divPlayerChoice');
const imgPlayerChoice= document.querySelector('.imgPlayerChoice');
const  ResultRound = document.getElementById('ResultRound');
const result= document.getElementById('result');
const emptyCircle= document.getElementById('emptyCircle')
let playerWin= document.createTextNode('YOU WIN');
let computerWin= document.createTextNode('YOU LOSE');
let draw= document.createTextNode('DRAW');
let desktopPlayerWin= document.createTextNode('YOU WIN');
let desktopComputerWin= document.createTextNode('YOU LOSE');
let desktopDraw= document.createTextNode('DRAW');

const ResultRoundMain = document.getElementById('ResultRoundMain');

const Result= document.getElementById('Result');

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(width>768)
{
   
}
function playCallback() {
    let childrenNodeList= mainDiv.children;
    for(let eachChild of childrenNodeList)
    {
        eachChild.style.display='none';
    }
    output1.style.display='flex';
    output2.style.display='flex';
   
    

    const computer= computerPlay();
    Computer.id= computer;
    const computerImgSrc= computer==='paper'?'images/icon-paper.svg' :computer==='scissors'? "images/icon-scissors.svg" :"images/icon-rock.svg";

    imgcomputer.src= computerImgSrc;

    if(document.getElementById('emptyCircle')) 
    {setTimeout(()=>{
       emptyCircle.style.display='none';
       Computer.style.display='flex';
    }, 300);}

    setTimeout(()=>{
        ResultRound.style.display='flex';
        if(width>768)
     {
         ResultRound.style.display='none';
         ResultRoundMain.style.display='flex'
         mainDiv.style.width= '768px';
         mainDiv.style.marginLeft ='-3.5rem';
 }
     }, 400);
    return computer;
}

function displayResult(resultCode){
    if(resultCode===1)
    {   
        result.appendChild(playerWin);
        Result.appendChild(desktopPlayerWin);
        score.textContent= ++scoreCount;
    }
    else if(resultCode===-1)
    {
        result.appendChild(computerWin);
        Result.appendChild(desktopComputerWin);
    }
    else
    {
        result.appendChild(draw);
        Result.appendChild(desktopDraw);
    }
}


rock.addEventListener('click', ()=>{
   
    let computer = playCallback();
    divPlayerChoice.id= 'rock';
    imgPlayerChoice.src="images/icon-rock.svg";
    let resultCode = playRound('rock', computer);
    result.textContent='';
    Result.textContent='';
    displayResult(resultCode);
})

paper.addEventListener('click', ()=>{
    let computer = playCallback();
    divPlayerChoice.id= 'paper';
    imgPlayerChoice.src="images/icon-paper.svg";
    let resultCode = playRound('paper', computer);
    result.textContent='';
    Result.textContent='';
    displayResult(resultCode);
})


scissors.addEventListener('click', ()=>{
    let computer = playCallback();
    divPlayerChoice.id= 'scissors';
    imgPlayerChoice.src="images/icon-scissors.svg";
    let resultCode = playRound('scissors', computer);
    result.textContent='';
    Result.textContent='';
    displayResult(resultCode);
})


console.log(btnPlayAgain)
 btnPlayAgain.forEach(btn=> btn.addEventListener('click', ()=>{
    
    mainDiv.style.width= '375px';
    mainDiv.style.marginLeft ='auto';
    let childrenNodeList= mainDiv.children;
     for(let eachChild of childrenNodeList)
     {

         if(eachChild.style.display==='none')
            eachChild.style.display='block';
     }
     output1.style.display='none';
     output2.style.display='none';
     ResultRound.style.display='none';
     ResultRoundMain.style.display='none';
     emptyCircle.style.display='block';
     Computer.style.display='none';
  
    
}))

function random(min,max) 
{ return Math.floor(Math.random() * max-min+1)+ min}

function computerPlay(){
    return (
        random(1,3)===1 ? 'rock': random(1,3)===2? 'paper' : 'scissors')
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection===computerSelection)
        return 0;

    else if(playerSelection==='rock')
    {
        if(computerSelection ==='scissors')
            return 1;
        else
            return -1;
    }

    else if(playerSelection==='paper')
    {
        if(computerSelection ==='rock')
            return 1
        else
            return -1
    }

    else {
        if(computerSelection ==='rock')
            return -1
        else
            return 1
    }

}
