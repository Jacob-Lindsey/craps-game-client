// This function handles all of the rules logic, and returns the object ID of the bet if it is a losing bet. (Or if it is a one-time bet)

const evaluateBet = (bet, currentBets, setCurrentBets, rollValue, setBalance, point, die1) => {

    function payWinningRoll() {
        return setBalance(prevBalance => prevBalance + (bet.payout + bet.wager));
    };

    function clearRoll() {
        return bet.id;
    };

    if (!point) {
        if (bet.betName === "Don't Pass Line") {
            if (rollValue === 7 || rollValue === 11) {
                return clearRoll();

            } else if (rollValue === 2 || rollValue === 3) {
                payWinningRoll();

            } else if (rollValue === 12) {
                setBalance(prevBalance => prevBalance + bet.wager);
            } else {
                let currentBetsCopy = currentBets.map(cBet => {
                    if (cBet.id === bet.id) {
                        cBet.loseConditions = [rollValue];
                        if (rollValue === 4 || rollValue === 10) {
                            cBet.odds = 1/2;
                            cBet.payout = +cBet.wager + (cBet.wager * (1/2));
                        } else if (rollValue === 5 || rollValue === 9) {
                            cBet.odds = 2/3;
                            cBet.payout = +cBet.wager + (cBet.wager * (2/3));
                        } else if (rollValue === 6 || rollValue === 8) {
                            cBet.odds = 5/6;
                            cBet.payout = +cBet.wager + (cBet.wager * (5/6));
                        }
                    }
                    return cBet;
                });

                setCurrentBets(currentBetsCopy);
            }

        } else if (bet.betName === "Pass Line") {
            if (rollValue === 7 || rollValue === 11) {
                payWinningRoll();

            } else if (rollValue === 2 || rollValue === 3 || rollValue === 12) {
                return clearRoll();

            } else {
                let currentBetsCopy = currentBets.map(cBet => {
                    if (cBet.id === bet.id) {
                        cBet.winConditions = [rollValue];
                        if (rollValue === 4 || rollValue === 10) {
                            cBet.odds = 2/1;
                            cBet.payout = +cBet.wager + (cBet.wager * (2/1));
                        } else if (rollValue === 5 || rollValue === 9) {
                            cBet.odds = 3/2;
                            cBet.payout = +cBet.wager + (cBet.wager * (3/2));
                        } else if (rollValue === 6 || rollValue === 8) {
                            cBet.odds = 5/6;
                            cBet.payout = +cBet.wager + (cBet.wager * (5/6));
                        }
                    }
                    return cBet;
                });
                setCurrentBets(currentBetsCopy);
            }
        }

    } else {
        if (bet.betName === "Don't Pass Line") {
            if (rollValue === 7) {
                let currentBetsCopy = currentBets.map(cBet => {
                    if (cBet.id === bet.id) {
                        cBet.loseConditions = [];
                    }
                    return cBet;
                });
                setCurrentBets(currentBetsCopy);
                payWinningRoll();
                
            } else if (rollValue === point) {
                return clearRoll();
            } 

        } else if (bet.betName === "Pass Line") {
            if (rollValue === 7) {
                return clearRoll();
                
            } else if (rollValue === point) {
                let currentBetsCopy = currentBets.map(cBet => {
                    if (cBet.id === bet.id) {
                        cBet.winConditions = [];
                    }
                    return cBet;
                });
                setCurrentBets(currentBetsCopy);
                payWinningRoll();
            }

        } else if (bet.betName === "Come") {
            if (rollValue === 7) {
                return clearRoll();
                
            } else if (rollValue === bet.winConditions[0]) {
                payWinningRoll();
                return clearRoll();
            }

        } else if (bet.betName === "Don't Come") {
            if (rollValue === 7) {
                payWinningRoll();
                return clearRoll();
                
            } else if (rollValue === bet.loseConditions[0]) {
                return clearRoll();
            }

        } else if (bet.betName === "Hardway") {
            
            // Checks if both dice are the same value
            if (bet.winConditions[0] === rollValue) {
                if (die1 === (bet.winConditions[0]/2)) {
                    payWinningRoll();
                    return clearRoll();
                } else {
                    return clearRoll()
                }
            } else if (rollValue === 7) {
                return clearRoll();
            } else {
                return null;
            }

        } else {
            if (bet.winConditions.includes(rollValue)) {
                payWinningRoll();
                if (!bet.persistent) {
                    return clearRoll();
                }
            } else if (bet.loseConditions.includes(rollValue)) {
                return clearRoll();
            }
        }
    }

    return null;
};

export default evaluateBet;
