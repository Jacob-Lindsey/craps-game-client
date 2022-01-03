const WagerInfo = (props) => {

    const selectBet = props.selectBet;

    return (
        <div className='data-wrapper'>
            {selectBet ?
                <div className='data-display'>
                    {
                        <>
                            <span className='display-title'>{selectBet.betName}</span>
                            <span className='display-details'>Odds: &nbsp;{selectBet.odds.toFixed(1)}:1</span>
                            <span className='display-details'>Payout: &nbsp;{selectBet.payout.toFixed(1)}</span>
                            <span className='display-details'>Wager Amount: &nbsp;{selectBet.wager}</span>
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