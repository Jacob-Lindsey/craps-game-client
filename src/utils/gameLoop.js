const gameLoop = (balance, setBalance, point, setPoint, rollValue, setGameMessage) => {
    if (rollValue === 2 || rollValue === 3 || rollValue === 12) {
        if (!point) {
            setGameMessage(`Craps ${rollValue}... Next shooter.`);
            return;
        } else {
            setGameMessage(`Shooter rolled a ${rollValue}. Keep em' going shooter!`);
            return;
        }
    } else if (rollValue === 7) {
        if (!point) {
            setGameMessage(`7 on the come-out! Roll again shooter!`);
            return;
        } else {
            setGameMessage('Craps! 7 out.');
            setPoint(null);
            return;
        }
    } else if (rollValue === 11 && !point) {
        setGameMessage('11 on the come-out! Roll again shooter!');
        return;
    } else {
        if (!point) {
            setGameMessage(`Shooter rolled a ${rollValue}. ${rollValue} is the point to hit!`);
            setPoint(rollValue);
            return;
        } else {
            if (rollValue === point) {
                setGameMessage(`Shooter rolled a ${rollValue}! Pass Line bets get paid out!`);
                setPoint(null);
                return;
            } else {
                setGameMessage(`Shooter rolled a ${rollValue}. Keep it going shooter!`);
                return;
            }
        }
    }
};

export default gameLoop;