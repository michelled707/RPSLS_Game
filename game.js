const readline = require("readline");
const AI = require("./AI");
const Human = require("./human");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let game;
class Game {

    playGame() {
        // For displaying the rules in console.    
        this.displayRules();

        let inputArray1 = [];
        let inputArray2 = [];

        rl.question("Enter option (1) for single player(Human Vs AI) OR (2) for multiple player(Human Vs Human) : ", function (singleOrMulti) {
            if (`${singleOrMulti}` == '1') {
                rl.question("You have opted for single player. Enter player name : ", function (singlePlayer) {
                    game = new AI(`${singlePlayer}`);

                    rl.question("Round 1 : " + `${singlePlayer}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input1) {
                        let input1 = `${input1}`.toLowerCase();
                        game.validateGesture(input1, rl);
                        inputArray1.push(input1);
                        rl.question("Round 2 : " + `${singlePlayer}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input2) {
                            let input2 = `${input2}`.toLowerCase();
                            game.validateGesture(input2, rl);
                            inputArray1.push(input2);
                            rl.question("Round 3 : " + `${singlePlayer}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input3) {
                                let input3 = `${input3}`.toLowerCase();
                                game.validateGesture(input3, rl);
                                inputArray1.push(input3);

                                game.humanAIPlay(inputArray1);
                                game.validateResult(game.player1Score, game.player2Score, game.player1, game.player2);
                                rl.close();
                            });
                        });
                    });
                });
            }
            else if (`${singleOrMulti}` == '2') {
                console.log("You have opted for multi players");
                rl.question("Enter player name 1 : ", function (player1) {
                    rl.question("Enter player name 2 : ", function (player2) {

                        game = new Human(`${player1}`, `${player2}`);
                        rl.question("Round 1 :" + `${player1}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input11) {
                            let input11 = `${input11}`.toLowerCase();
                            game.validateGesture(input11, rl);
                            inputArray1.push(input11);
                            rl.question("Round 1 :" + `${player2}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input12) {
                                let input12 = `${input12}`.toLowerCase();
                                game.validateGesture(input12, rl);
                                inputArray2.push(input12);
                                rl.question("Round 2 :" + `${player1}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input21) {
                                    let input21 = `${input21}`.toLowerCase();
                                    game.validateGesture(input21, rl);
                                    inputArray1.push(input21);
                                    rl.question("Round 2 :" + `${player2}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input22) {
                                        let input22 = `${input22}`.toLowerCase();
                                        game.validateGesture(input22, rl);
                                        inputArray2.push(input22);
                                        rl.question("Round 3 :" + `${player1}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input31) {
                                            let input31 = `${input31}`.toLowerCase();
                                            game.validateGesture(input31, rl);
                                            inputArray1.push(input31);
                                            rl.question("Round 3 :" + `${player2}` + ", Do you choose rock, paper, scissors, lizard, or spock? : ", function (input32) {
                                                let input32 = `${input32}`.toLowerCase();
                                                game.validateGesture(input32, rl);
                                                inputArray2.push(input32);

                                                game.humansPlay(inputArray1, inputArray2);
                                                game.validateResult(game.player1Score, game.player2Score, game.player1, game.player2);
                                                rl.close();

                                            });

                                        });

                                    });

                                });

                            });

                        });
                    });
                });
            }
            else {
                console.log("Option - " + `${singleOrMulti} is invalid. Kindly try again`);
                rl.close();
            }
        });
    }


    displayRules() {
        console.log("Welcome to the Rock-Paper-Scissors-Lizard-Spock (RPSLS) Game!");
        console.log("");
        console.log("The Rules : Scissors cut paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitate lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.");
        console.log("Best of 3 rounds decides the winner of RPSLS game. Good luck and Have fun!!!");
        console.log("");
    }
}

module.exports = Game;