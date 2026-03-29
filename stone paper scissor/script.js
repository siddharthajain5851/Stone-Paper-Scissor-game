let userScore = 0;
let cpuScore = 0;

function play(userChoice) {
    const choices = ["stone", "paper", "scissors"];
    const cpuChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user").innerText = "You: " + userChoice;
    document.getElementById("cpu").innerText = "CPU: " + cpuChoice;

    let result = "";

    if (userChoice === cpuChoice) {
        result = "Draw ";
    } 
    else if (
        (userChoice === "stone" && cpuChoice === "scissors") ||
        (userChoice === "paper" && cpuChoice === "stone") ||
        (userChoice === "scissors" && cpuChoice === "paper")
    ) {
        result = "You Win ";
        userScore++;
    } 
    else {
        result = "You Lose ";
        cpuScore++;
    }

    document.getElementById("winner").innerText = "Result: " + result;
    document.getElementById("score").innerText = 
        "You: " + userScore + " | CPU: " + cpuScore;
}
let a=()=>{
    let n=(Math.random()*3)+1;
    n=Math.floor(n);
    if(n==1){
        return"stone"
    }
    else if(n==2){
        return"paper"
    }
     else if(n==3){
        return"scissor"
    }
}
 