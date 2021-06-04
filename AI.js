let Player = require('./player')
class AI extends Player {
    constructor(player1) {
        super();
        this.player1Score = 0;
        this.player1 = player1;

        this.player2Score = 0;
        this.player2 = "AI Bot";
    }

    humanAIPlay(input1) {

        for (let i = 0; i < input1.length; i++) {
            //Get the computers choice
            let computerChoice = Math.random();
            if (computerChoice < 0.2) {
                computerChoice = "rock";
            } else if (computerChoice <= 0.4) {
                computerChoice = "paper";
            } else if (computerChoice <= 0.6) {
                computerChoice = "scissors";
            } else if (computerChoice <= 0.8) {
                computerChoice = "lizard";
            } else {
                computerChoice = "spock";
            }
            console.log("Computer choice : " + computerChoice);

            let victory = this.play(input1[i], computerChoice);
            if (victory == 'player1') {
                this.player1Score++;
            } else if (victory == 'player2') {
                this.player2Score++;
            }
        }
    }
}
module.exports = AI