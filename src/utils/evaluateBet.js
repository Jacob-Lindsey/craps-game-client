const evaluateBet = (bet, currentBets, setCurrentBets, rollValue, setBalance, point, chips, setChips) => {

    function filterChips() {
        const filteredChips = chips && chips.filter((chip) => chip.id !== bet.id);
        setChips(filteredChips);
    };

    function filterBets() {
        const filteredBets = currentBets && currentBets.filter((cBet) => cBet.id !== bet.id);
        setCurrentBets(filteredBets);
    };

    function payWinningRoll() {
        return setBalance(prevBalance => prevBalance + (bet.payout + bet.wager));
    };

    function clearRoll() {
        filterBets();
        filterChips();
    };

    if (!point) {
        if (bet.betName === "Don't Pass Line") {
            if (rollValue === 7 || rollValue === 11) {
                clearRoll();

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
                clearRoll();

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
                clearRoll();
            } 

        } else if (bet.betName === "Pass Line") {
            if (rollValue === 7) {
                clearRoll();
                
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
                clearRoll();
                
            } else if (rollValue === bet.winConditions[0]) {
                payWinningRoll();
                clearRoll();
            }

        } else if (bet.betName === "Don't Come") {
            if (rollValue === 7) {
                payWinningRoll();
                clearRoll();
                
            } else if (rollValue === bet.loseConditions[0]) {
                clearRoll();
            }

        } else {
            if (bet.winConditions.includes(rollValue)) {
                payWinningRoll();
                if (!bet.persistent) {
                    clearRoll();
                }
            } else if (bet.loseConditions.includes(rollValue)) {
                clearRoll();
            }
        }
    }

    // return a string of all bet results ???

};

export default evaluateBet;
