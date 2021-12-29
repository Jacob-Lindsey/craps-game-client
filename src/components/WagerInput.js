const WagerInput = (props) => {

    const nameText = props.nameText;
    const setNameText = props.setNameText;
    const bet = props.bet;
    const setCurrentBets = props.setCurrentBets;
    const wagerAmount = props.wagerAmount;
    const setWagerAmount = props.setWagerAmount;

    const handleAddBet = () => {
        const newBet = bet ? bet : null;
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
            <input 
                placeholder='Name'
                type='text'
                value={nameText} 
                onChange={(e) => setNameText(e.target.value)}
            />
            <input
                placeholder='Wager'
                type='tel'
                pattern='^-?[0-9]\d*\.?\d*$'
                onChange={updateWager}
                value={wagerAmount}
            />
            <button className='bet-btn green-btn' onClick={handleAddBet}>Add Bet</button>
        </div>
    )

};

export default WagerInput;