import { useState, useEffect } from 'react';
import { passLine, field, place, lay, any7, anyCraps, craps2or12, craps3or11, horn3or11, horn2or12, big6or8 } from '../utils/bets';
import { roll } from '../utils/rollDice';
import '../App.css';

const FunctionTestPage = () => {

    const [balance, setBalance] = useState(0);
    const [bet, setBet] = useState();
    const [currentBets, setCurrentBets] = useState([]);
    const [nameText, setNameText] = useState('');
    const [wagerAmount, setWagerAmount] = useState(0);
    const [die1, setDie1] = useState();
    const [die2, setDie2] = useState();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();
    const [rollHistory, setRollHistory] = useState([]);

    let pips1 = [];
    let pips2 = [];

    const updateWager = (e) => {
        const val = e.target.value;
        if (e.target.validity.valid) {
            setWagerAmount(e.target.value);
        } else if (val === '') {
            setWagerAmount(val);
        }
    };

    const handleRoll = () => {
        const rollResult = roll();
        const d1 = rollResult[0];
        const d2 = rollResult[1];
        setDie1(d1);
        setDie2(d2);
        pips1 = [];
        pips2 = [];
        for (let i = 0; i < d1; i++) {
            pips1.push(<span className='pip' key={i}>&#8226;</span>);
        }
        for (let i = 0; i < d2; i++) {
            pips2.push(<span className='pip' key={i}>&#8226;</span>);
        }
        setP1(pips1);
        setP2(pips2);
        setRollHistory(oldRollHistory => [...oldRollHistory, [pips1,pips2]]);
    };

    const handleAddBet = () => {
        const newBet = bet ? bet : null;
        if (!newBet) {
            return;
        }
        setCurrentBets(oldCurrentBets => [...oldCurrentBets, newBet]);
    };

    return (
        <div className='container'>

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
                    <button className='bet-btn green-btn' onClick={handleAddBet}>Add Bet</button>
                </div>

                <div className='roll-result-wrapper'>
                        <div className='roll-result'>
                            <div className='die-face'>
                                {die1 &&
                                    <>
                                        {p1}
                                    </>
                                }
                            </div>
                            <div className='die-face'>
                                {die2 &&
                                    <> 
                                        {p2}
                                    </>
                                }
                            </div>
                        </div>
                    <button className='bet-btn green-btn' onClick={() => handleRoll()}>ROLL</button>
                </div>

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

            </div>

            <div className='game-info-wrapper'>

                <div className='bet-history-wrapper'>
                    <p className='history-title'>Roll History</p> 
                    {rollHistory && rollHistory.map((roll, index) => {
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

                <div className='current-bets-wrapper'>
                    <p className='history-title'>Bet History</p>
                    {currentBets && currentBets.map((bet, index) => {
                        return (
                            <div className='current-bet-details' key={index}>
                                <h2>{bet.betName}</h2>
                                <p>Odds: &nbsp;{bet.odds.toFixed(1)}:1</p>
                                <p>Payout: &nbsp;{bet.payout.toFixed(1)}</p>
                                <p>Wager Amount: &nbsp;{bet.wager}</p>
                            </div>
                        )
                    })}

                </div>

                
            </div>

           
        </div>
    )
};

export default FunctionTestPage;

/* {Object.entries(bet).map(([key, value]) => (
        <div key={key}>{key}: {JSON.stringify(value)}</div>
    ))} */