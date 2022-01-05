const gameLoop = (balance, setBalance, point, setPoint, rollValue, setGameMessage, setOpen, setStreak) => {
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