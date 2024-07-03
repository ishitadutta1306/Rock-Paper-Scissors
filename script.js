let userScoreCount=0;
let compScoreCount=0;
let drawsCount=0;

const choices=document.querySelectorAll(".choice");
const resultMsg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");
const drawsScore=document.querySelector("#draws-score");
const resetBtn=document.querySelector("#reset-btn");

//Event listener on weapon clicked
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //User's choice
        const userChoice=choice.getAttribute("id");
        console.log("User clicked:",userChoice);   //Rock,etc

        playGame(userChoice);
    });
});

//Functions
const generateCompChoice=()=>{
    const weapon=["Rock","Paper","Scissors"];

    //randomly select one of the three strings from the weapon arr
    return weapon[Math.floor(Math.random()*3)];
};

const playGame=(userChoice)=>{
    //Computer's choice
    const compChoice=generateCompChoice();
    console.log("Comp chose:",compChoice);

    //Check winning conditions
    if (userChoice===compChoice){   //both same choice->draw
        drawGame(userChoice);
    }
    else{
        userWins=true;
        if (userChoice==="Rock"){   //rock beats scissors, loses to paper
            userWins=compChoice==="Paper"?false:true;   //if comp chooses paper -> user loses 
        }
        else if (userChoice==="Paper"){ //paper beats rock, loses to scissors
            userWins=compChoice==="Scissors"?false:true;
        }
        else{   //user: scissors, scissors beat paper, loses to rock
            userWins=compChoice==="Rock"?false:true;
        }
        showWinner(userWins,userChoice,compChoice);
    }

    //reset game
    resetGame();
};

const drawGame=()=>{
    drawsCount++;
    drawsScore.innerText=drawsCount;   //update score for draw
    console.log("Draw!");
    resultMsg.innerText="It's a draw!🤝";
    resultMsg.style.color="black";
};

const showWinner=(userWins,userChoice,compChoice)=>{
    if (userWins){
        userScoreCount++;
        userScore.innerText=userScoreCount;
        console.log("You win!");
        resultMsg.innerText=`You win!🤩 ${userChoice} beats ${compChoice}`;
        resultMsg.style.color="green";
    }
    else{
        compScoreCount++;
        compScore.innerText=compScoreCount;
        console.log("You lose!");
        resultMsg.innerText=`You lose!☹️ ${userChoice} loses to ${compChoice}`;
        resultMsg.style.color="maroon";
    }
};

const resetGame=()=>{
    resetBtn.addEventListener("click",()=>{
        console.log("You clicked reset button");
        userScoreCount=0;
        userScore.innerText="0";
        compScoreCount=0;
        compScore.innerText="0";
        drawsCount=0;
        drawsScore.innerText="0";
        resultMsg.innerText="Play your move!";
        resultMsg.style.color="black";
    });
};
