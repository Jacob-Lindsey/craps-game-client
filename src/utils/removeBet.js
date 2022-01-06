export default function removeBet(bet, setBalance, currentBets, setCurrentBets, chips, setChips) {
    
    let chipToDelete;

    const filteredChips = chips.filter(chip => chip.id !== bet.id);
    setChips(filteredChips)

    setBalance(prevBalance => prevBalance + +bet.wager);
    setCurrentBets(currentBets.filter(cBet => cBet !== bet));
};