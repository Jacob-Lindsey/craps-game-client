const RollHistory = (props) => {

    const rollHistory = props.rollHistory;

    return (
        <div className='bet-history-wrapper'>
            <p className='history-title'>Roll History</p> 
            {rollHistory && rollHistory.slice(0).reverse().map((roll, index) => {
                return (
                    <div className='current-bet-details' key={index}>
                        <div className='die-face'>
                            {roll[0]}
                        </div>
                        <div className='die-face'>
                            {roll[1]}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default RollHistory;