import { useCallback, useEffect } from "react";
import { useStore } from "../store/useStore";

const WagerInput = () => {

    const { balance, setBalance } = useStore();
    const { wagerAmount, setWagerAmount } = useStore();

    const addToBalance = useCallback((e) => {
        if (e.key === '+') {
            setBalance(prevBalance => prevBalance + 100);
        }
    }, [setBalance]);

    useEffect(() => {
        document.addEventListener('keydown', addToBalance);
        return () => {
            document.removeEventListener('keydown', addToBalance);
        };
    }, [addToBalance]);

    const updateWager = (val) => {
        setWagerAmount(val);
    };

    return (
        <div className='wager-wrapper card'>
            <div className='card-header-top header-fixed'>Wager - Balance: {balance ? balance : 0}</div>
            <div className='card-body'>
                <span className="input-wrapper">
                    <span className={`chip-wrapper ${wagerAmount === 5 ? 'selected' : null}`}><span className="chip-5" onClick={() => updateWager(5)}>5</span></span>
                    <span className={`chip-wrapper ${wagerAmount === 10 ? 'selected' : null}`}><span className="chip-10" onClick={() => updateWager(10)}>10</span></span>
                    <span className={`chip-wrapper ${wagerAmount === 25 ? 'selected' : null}`}><span className="chip-25" onClick={() => updateWager(25)}>25</span></span>
                    <span className={`chip-wrapper ${wagerAmount === 100 ? 'selected' : null}`}><span className="chip-100" onClick={() => updateWager(100)}>100</span></span>
                    <span className="chip-label">$5</span>
                    <span className="chip-label">$10</span>
                    <span className="chip-label">$25</span>
                    <span className="chip-label">$100</span>
                </span>
            </div>       
        </div>
    )
};

export default WagerInput;