var Player = require('./Player');

class Human extends Player {
    constructor(player1, player2) {
        super();
        this.player1Score = 0;
        this.player1 = player1;

        this.player2Score = 0;
        this.player2 = player2;
    }

    humansPlay(input1, input2) {
        for (let i = 0; i < input1.length; i++) {
            let victory = this.play(input1[i], input2[i]);
            if (victory == 'player1') {
                this.player1Score++;
            } else if (victory == 'player2') {
                this.player2Score++;
            }
        }
    }
}

module.exports = Human