export default function calculateNewPayout(val, selectBet) {
    const newPayout = val + (val * selectBet.odds);
    return newPayout;
};