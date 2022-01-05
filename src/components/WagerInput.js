import { useState, useCallback, useEffect } from "react";
import WagerInfo from "./WagerInfo";

const WagerInput = (props) => {

    const [error, setError] = useState();

    const balance = props.balance;
    const setBalance = props.setBalance;
    const selectBet = props.selectBet;
    const setSelectBet = props.setSelectBet;
    const setCurrentBets = props.setCurrentBets;
    const wagerAmount = props.wagerAmount;
    const setWagerAmount = props.setWagerAmount;

    const addToBalance = useCallback((e) => {
        if (e.key === '+') {
            setBalance(prevBalance => prevBalance + 100);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', addToBalance);
        return () => {
            document.removeEventListener('keydown', addToBalance);
        };
    }, [addToBalance]);

    const handleAddBet = () => {
        const newBet = selectBet ? selectBet : null;
        if (!newBet) {
            setError(null);
            return;
        } else if (newBet.wager > balance) {
            setError('Insufficient Balance');
            return;
        }
        setError(null);
        setBalance(prevBalance => prevBalance - newBet.wager);
        setCurrentBets(oldCurrentBets => [...oldCurrentBets, newBet]);
    };

    const updateWager = (e) => {
        const val = e.target.value;
        if (e.target.validity.valid) {
            setWagerAmount(e.target.value);
            setSelectBet(selectBet => ({
                ...selectBet,
                payout: +calculateNewPayout(e.target.value),
                wager: e.target.value,
            }));
        } else if (val === '') {
            setWagerAmount(val);
        }
    };

    const calculateNewPayout = (val) => {
        const newPayout = val + (val * selectBet.odds);
        return newPayout;
    };

    return (
        <div className='wager-wrapper card'>
            <div className='card-header-top header-fixed'>Wager - Balance: {balance ? balance : 0}</div>
            <div className='card-body'>
                <WagerInfo selectBet={selectBet} />
                <span className="input-wrapper">
                    <input
                        placeholder='Wager'
                        type='tel'
                        pattern='^-?[0-9]\d*\.?\d*$'
                        onChange={updateWager}
                        value={wagerAmount}
                    />
                    {error && <span className="input-error-msg">{error}</span>}
                    <button className='bet-btn green-btn' onClick={handleAddBet}>Add Bet</button>
                </span>
            </div>
            
        </div>
    )

};

export default WagerInput;