export default function removeBet(bet, setBalance, currentBets, setCurrentBets) {
    setBalance(prevBalance => prevBalance + +bet.wager);
    setCurrentBets(currentBets.filter(cBet => cBet !== bet));
};