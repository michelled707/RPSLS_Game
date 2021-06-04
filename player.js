class Player {


    play(input1, input2) {
        //Set up the choices with what they can beat
        //This is a hash table of objects you can referecne by name
        let choices = {
            rock: { name: "Rock", defeats: ["scissors", "lizard"] },
            paper: { name: "Paper", defeats: ["rock", "spock"] },
            scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
            lizard: { name: "Lizard", defeats: ["paper", "spock"] },
            spock: { name: "Spock", defeats: ["scissors", "rock"] }
        };

        let victory = '';
        //Check for a tie
        if (input1 == input2) {
            return victory;
            //Check for a valid choice
        } else {
            //Get the chosen one as an object
            input1 = choices[input1];
            // console.log("input1 ======> "+JSON.stringify(input1));
            // console.log("input1.defeats ======> "+input1.defeats);
            // console.log("input1.defeats.indexOf(input2) ======> "+input1.defeats.indexOf(input2));
            if (input1.defeats.indexOf(input2) > -1) {
                return 'player1';
            } else {
                return 'player2';
            }

        }
    }

    validateGesture(input, rl) {
        // console.log("======> "+input);
        if (input !== 'rock' && input !== 'paper' && input !== 'scissors' && input !== 'lizard' && input !== 'spock') {
            console.log("Gesture option - " + input + " is invalid. Kindly try again and chose one among rock, paper, scissors, lizard, or spock");
            rl.close();
            process.exit();
        }
    }

    validateResult(player1Score, player2Score, player1, player2) {
        console.log(player1 + " wins ==> " + player1Score + " round(s) and", player2 + " wins ==> " + player2Score + " round(s)");
        if (player1Score > player2Score) {
            console.log(player1 + " Wins!");
        } else if (player1Score < player2Score) {
            console.log(player2 + " Wins!");
        } else {
            console.log(player1 + " and " + player2 + " are in Ties!");
        }
    }

}
module.exports = Player