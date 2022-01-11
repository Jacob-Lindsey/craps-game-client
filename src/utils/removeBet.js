export default function removeBet(bet, setBalance, currentBets, setCurrentBets, chips, point, setChips, setError) {

    if (point) {
        setError(`${bet.betName} bet can't be removed while the point is active.`);
        return;
    }

    const filteredChips = chips.filter(chip => chip.id !== bet.id);
    setChips(filteredChips)

    setBalance(prevBalance => prevBalance + +bet.wager);
    setCurrentBets(currentBets.filter(cBet => cBet !== bet));
};