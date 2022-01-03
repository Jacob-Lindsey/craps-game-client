import WagerInfo from "./WagerInfo";

const WagerInput = (props) => {

    const selectBet = props.selectBet;
    const setCurrentBets = props.setCurrentBets;
    const wagerAmount = props.wagerAmount;
    const setWagerAmount = props.setWagerAmount;

    const handleAddBet = () => {
        const newBet = selectBet ? selectBet : null;
        if (!newBet) {
            return;
        }
        setCurrentBets(oldCurrentBets => [...oldCurrentBets, newBet]);
    };

    const updateWager = (e) => {
        const val = e.target.value;
        if (e.target.validity.valid) {
            setWagerAmount(e.target.value);
        } else if (val === '') {
            setWagerAmount(val);
        }
    };

    return (
        <div className='wager-wrapper'>
            <div className='card-header header-fixed'>Wager</div>
            <div className='card-body'>
                <WagerInfo selectBet={selectBet} />
                <span>
                    <input
                        placeholder='Wager'
                        type='tel'
                        pattern='^-?[0-9]\d*\.?\d*$'
                        onChange={updateWager}
                        value={wagerAmount}
                    />
                    <button className='bet-btn green-btn' onClick={handleAddBet}>Add Bet</button>
                </span>
            </div>
            
        </div>
    )

};

export default WagerInput;