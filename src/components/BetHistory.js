const BetHistory = (props) => {

    const currentBets = props.currentBets;

    return (
        <div className='current-bets-wrapper'>
            <p className='history-title'>Current Bets</p>
                {currentBets && currentBets.slice(0).reverse().map((bet, index) => {
                    return (
                        <div className='current-bet-details' key={index}>
                            <h2>{bet.betName}</h2>
                            <p>Odds: &nbsp;{bet.odds.toFixed(1)}:1</p>
                            <p>Payout: &nbsp;{bet.payout.toFixed(1)}</p>
                            <p>Wager Amount: &nbsp;{bet.wager}</p>
                        </div>
                    )
                })}
        </div>
    )
};

export default BetHistory;