function randomPlay() {
        var play = Math.random() * 3;
        if (play < 1) {
                return "rock";
        } else if (play < 2) {
                return "paper";
        } else {
                return "scissors";
        }
}
function rockPaperScissors() {
        myPlay = prompt("What do you play? Rock, paper, or scissors?");
        if (myPlay == "rock" || myPlay == "scissors" || myPlay == "paper") {
                console.log("You played " + myPlay);
        } else {
                console.log("You didn't provide a valid play.")
        }
 
        compPlay = randomPlay();
        console.log("Computer played " + compPlay);
 
        if ((myPlay === "rock" && compPlay === "scissors")
        || (myPlay === "paper" && compPlay === "rock")
        || (myPlay === "scissors" && compPlay === "paper")) {
                console.log("You win.");
        } else if ((myPlay === "rock" && compPlay === "rock")
        || (myPlay === "paper" && compPlay === "paper")
        || (myPlay === "scissors" & compPlay === "scissors")) {
                console.log("You and the computer tie.");
        } else if ((myPlay === "rock" && compPlay === "paper")
        || (myPlay === "paper" && compPlay === "scissors")
        || (myPlay === "scissors" && compPlay === "rock")) {
                console.log("Computer wins.");
        }
}


function checkIfEven(upperBound) {
        var i;
        //for (initializing variable; condition; increment)
        for (i=0; i<upperBound; i=i+1) {
                console.log(i)
        }
}