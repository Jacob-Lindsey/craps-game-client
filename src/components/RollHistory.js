const RollHistory = (props) => {

    const rollHistory = props.rollHistory;

    return (
        <div className='roll-history card'>
            <div className='card-header-bottom'>Roll History</div> 
            {rollHistory && rollHistory.slice(0).reverse().map((roll, index) => {
                return (
                    <div className='roll-history-details' key={index}>
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