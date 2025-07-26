let rock=document.querySelector('.rock');
let paper=document.querySelector('.paper');
let scissor=document.querySelector('.scissor');
let scores=document.querySelector('.scores');
let userScore=document.querySelector('#user-score');
let computerScore=document.querySelector('#computer-score');
let playagain=document.querySelector('.playagain');
let user=document.querySelector('.user');
let comp=document.querySelector('.comp');
let h2=document.createElement('h2');
let h=document.createElement('h2');
choices=["rock", "paper", "scissors"];

rock.addEventListener('click',()=>{
    
    playGame('rock');
});
paper.addEventListener('click',()=>{
    playGame('paper');
});
scissor.addEventListener('click',()=>{
    playGame('scissors');
});


let randomNumber=()=>{
let random=Math.floor(Math.random()*3);
return random;
}


playGame=(userChoice)=>{
    var ran=randomNumber();
    var compchoice=choices[ran];
   
    h.innerHTML=`<h2>Your move:</h2>`;

    user.innerHTML=`<img src="images/${userChoice}.png" alt="${userChoice} class="user-choice"><br>`;
    userimg=document.querySelector('.user-choice');
    user.prepend(h);
    h2.innerHTML=`<h2>Computer move:</h2>`;
    comp.innerHTML=`<img src="images/${compchoice}.png" alt="${compchoice}" class="comp-choice"><br>`;
    compimg=document.querySelector('.comp-choice');
    comp.prepend(h2);
   
    checkWinner(userChoice, compchoice);   

}
checkWinner=(userChoice, compchoice)=>{
    if(userChoice===compchoice){
        scores.innerHTML=`<h1>It's a draw!⭐</h1>`;
        return;
    }
    if(userChoice==='paper' && compchoice==='rock'){
        scores.innerHTML=`<h1>you win this game!🎊🎉</h1>`;
        updateScore('user');
    }else if(userChoice==='rock' && compchoice==='scissors'){
        scores.innerHTML=`<h1>you win this game!🎊🎉</h1>`;
        updateScore('user');
    }else if(userChoice==='scissors' && compchoice==='paper'){
        scores.innerHTML=`<h1>you win this game!🎊🎉</h1>`;
        updateScore('user');
    }else{
        scores.innerHTML=`<h1>Computer wins this game</h1>`;
        updateScore('computer');
    }
}
updateScore=(who)=>{
    if(who==='user'){
        let score=parseInt(userScore.innerHTML);
        score++;
        userScore.innerText=score;
    }else{
        let score=parseInt(computerScore.innerHTML);
        score++;
        computerScore.innerText=score;
    }
}

playagain.onclick=()=>{
    userScore.innerText=0;
    computerScore.innerText=0;
    scores.innerHTML=`<h1>Choose your move:</h1>`;
    user.innerHTML='';
    comp.innerHTML='';
    h.remove();
    h2.remove();
}

