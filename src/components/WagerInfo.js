const WagerInfo = (props) => {

    const bet = props.bet;

    return (
        <div className='data-wrapper'>
            {bet && 
                <div className='data-display'>
                    {
                        <>
                            <p className='display-title'>{bet.betName}</p>
                            <span>
                                <p>Odds: </p>
                                <p>&nbsp;{bet.odds.toFixed(1)}:1</p>
                            </span>
                            <span>
                                <p>Payout: </p>
                                <p>&nbsp;{bet.payout.toFixed(1)}</p>
                            </span>
                            <span>
                                <p>Wager Amount: </p>
                                <p>&nbsp;{bet.wager}</p>
                            </span>
                        </>
                    }
                </div>
            }
        </div>
    )

};

export default WagerInfo;