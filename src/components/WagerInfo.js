const WagerInfo = (props) => {

    const bet = props.bet;

    return (
        <div className='data-wrapper'>
            {bet ?
                <div className='data-display'>
                    {
                        <>
                            <span className='display-title'>{bet.betName}</span>
                            <span className='display-details'>Odds: &nbsp;{bet.odds.toFixed(1)}:1</span>
                            <span className='display-details'>Payout: &nbsp;{bet.payout.toFixed(1)}</span>
                            <span className='display-details'>Wager Amount: &nbsp;{bet.wager}</span>
                        </>
                    }
                </div> :
                <div className='data-display'>
                    <span className='display-title dashed-border'>Select a wager from the table.</span>
                </div>
            }
        </div>
    )

};

export default WagerInfo;