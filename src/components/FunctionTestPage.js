import { useState, useEffect } from 'react';
import { passLine, field, place, lay, any7, anyCraps, craps2or12, craps3or11, horn3or11, horn2or12, big6or8 } from '../utils/bets';
import '../App.css';

const FunctionTestPage = () => {

    const [bet, setBet] = useState();
    const [nameText, setNameText] = useState('');
    const [wagerAmount, setWagerAmount] = useState(0);

    const updateWager = (e) => {
        const val = e.target.value;
        if (e.target.validity.valid) {
            setWagerAmount(e.target.value);
        } else if (val === '') {
            setWagerAmount(val);
        }
    }

    return (
        <div className='page-wrapper'>
            <div className='bet-btn-wrapper'>
                <button className='bet-btn' onClick={() => setBet(passLine(nameText, wagerAmount))}>Pass Line</button>
                <button className='bet-btn' onClick={() => setBet(field(nameText, wagerAmount, 2))}>Field</button>
                <button className='bet-btn' onClick={() => setBet(place(nameText, wagerAmount, 10))}>Place</button>
                <button className='bet-btn' onClick={() => setBet(lay(nameText, wagerAmount, 8))}>Lay</button>
                <button className='bet-btn' onClick={() => setBet(any7(nameText, wagerAmount))}>Any 7</button>
                <button className='bet-btn' onClick={() => setBet(anyCraps(nameText, wagerAmount))}>Any Craps</button>
                <button className='bet-btn' onClick={() => setBet(craps2or12(nameText, wagerAmount))}>Craps 2 or 12</button>
                <button className='bet-btn' onClick={() => setBet(craps3or11(nameText, wagerAmount))}>Craps 3 or 11</button>
                <button className='bet-btn' onClick={() => setBet(horn3or11(nameText, wagerAmount))}>Horn 3 or 11</button>
                <button className='bet-btn' onClick={() => setBet(horn2or12(nameText, wagerAmount))}>Horn 2 or 12</button>
                <button className='bet-btn' onClick={() => setBet(big6or8(nameText, wagerAmount))}>Big 6 or 8</button>
            </div>
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


            </div>
            <div className='data-wrapper'>
                {bet && 
                    <div className='data-display'>
                        {
                            <>
                                <h2>{bet.betName}</h2>
                                <h3>Odds: &nbsp;{bet.odds.toFixed(1)}:1</h3>
                                <h4>Payout: &nbsp;{bet.payout.toFixed(1)}</h4>
                                <h5>Wager Amount: &nbsp;{bet.wager}</h5>
                            </>
                        }
                    </div>
                }
            </div>
        </div>
    )

};

export default FunctionTestPage;

/* {Object.entries(bet).map(([key, value]) => (
        <div key={key}>{key}: {JSON.stringify(value)}</div>
    ))} */