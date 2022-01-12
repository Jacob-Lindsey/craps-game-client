import evaluateBet from "./evaluateBet";

const gameLoop = (currentBets, setCurrentBets, setBalance, point, setPoint, rollValue, setGameMessage, setOpen, setStreak, chips, setChips, die1) => {

    // Store bet object IDs in this array from evaluateBet()
    let betsToRemove = [];

    for (const bet of currentBets) {
        betsToRemove.push(evaluateBet(bet, currentBets, setCurrentBets, rollValue, setBalance, point, die1));
    }
    
    // Create a new array excluding the objects whose IDs match the ones in betsToRemove
    const filteredBets = currentBets && currentBets.filter(cBet => !betsToRemove.includes(cBet.id));
    const filteredChips = chips && chips.filter(chip => !betsToRemove.includes(chip.id));

    // Update the states with the filtered arrays
    setCurrentBets(filteredBets);
    setChips(filteredChips);

    if (rollValue === 2 || rollValue === 3 || rollValue === 12) {
        if (!point) {
            setGameMessage(`Craps ${rollValue}... Next shooter.`);
            setOpen(true);
            return;
        } else {
            setGameMessage(`Shooter rolled a ${rollValue}. Keep em' going shooter!`);
            setStreak(prevStreak => prevStreak + 1);
            setOpen(true);
            return;
        }
    } else if (rollValue === 7) {
        if (!point) {
            setGameMessage(`7 on the come-out! Roll again shooter!`);
            setOpen(true);
            return;
        } else {
            setGameMessage('Craps! 7 out.');
            setStreak(0);
            setOpen(true);
            setPoint(null);
            return;
        }
    } else if (rollValue === 11 && !point) {
        setGameMessage('11 on the come-out! Roll again shooter!');
        setOpen(true);
        return;
    } else {
        if (!point) {
            setGameMessage(`Shooter rolled a ${rollValue}. ${rollValue} is the point to hit!`);
            setOpen(true);
            setPoint(rollValue);
            return;
        } else {
            if (rollValue === point) {
                setGameMessage(`Shooter rolled a ${rollValue}! Pass Line bets get paid out!`);
                setStreak(0);
                setOpen(true);
                setPoint(null);
                return;
            } else {
                setGameMessage(`Shooter rolled a ${rollValue}. Keep it going shooter!`);
                setStreak(prevStreak => prevStreak + 1);
                setOpen(true);
                return;
            }
        }
    }
};

export default gameLoop;