const evaluateBet = (bet, setCurrentBets, isComeOutRoll, rollValue, setBalance, point, chips, setChips) => {

    if (isComeOutRoll) {
        if (bet.betName === "Pass Line" || bet.betName === "Don't Pass Line") {
            if (!bet.loseConditions.length) {
                if (rollValue === 7 || rollValue === 11) {

                }
                let updatedBet = {...bet, loseConditions: [rollValue]}
                setCurrentBets(prevBets => [...prevBets, updatedBet]);
            }
        }
    }

    // return a string of all bet results ???

};

export default evaluateBet;
