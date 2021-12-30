import { useState, useEffect } from 'react';
import DieFace from './DieFace';
import BetHistory from './BetHistory';
import RollHistory from './RollHistory';
import WagerInfo from './WagerInfo';
import WagerInput from './WagerInput';
import { passLine, field, place, lay, any7, anyCraps, craps2or12, craps3or11, horn3or11, horn2or12, big6or8 } from '../utils/bets';

import '../App.css';

const FunctionTestPage = () => {

    const [balance, setBalance] = useState(0);
    const [bet, setBet] = useState();
    const [currentBets, setCurrentBets] = useState([]);
    const [wagerAmount, setWagerAmount] = useState(0);
    const [rollHistory, setRollHistory] = useState([]);   

    return (
        <div className='container'>
            <div className='bet-btn-wrapper'>
                <button className='bet-btn' onClick={() => setBet(passLine('Jake', wagerAmount))}>Pass Line</button>
                <button className='bet-btn' onClick={() => setBet(field('Jake', wagerAmount, 2))}>Field</button>
                <button className='bet-btn' onClick={() => setBet(place('Jake', wagerAmount, 10))}>Place</button>
                <button className='bet-btn' onClick={() => setBet(lay('Jake', wagerAmount, 8))}>Lay</button>
                <button className='bet-btn' onClick={() => setBet(any7('Jake', wagerAmount))}>Any 7</button>
                <button className='bet-btn' onClick={() => setBet(anyCraps('Jake', wagerAmount))}>Any Craps</button>
                <button className='bet-btn' onClick={() => setBet(craps2or12('Jake', wagerAmount))}>Craps 2 or 12</button>
                <button className='bet-btn' onClick={() => setBet(craps3or11('Jake', wagerAmount))}>Craps 3 or 11</button>
                <button className='bet-btn' onClick={() => setBet(horn3or11('Jake', wagerAmount))}>Horn 3 or 11</button>
                <button className='bet-btn' onClick={() => setBet(horn2or12('Jake', wagerAmount))}>Horn 2 or 12</button>
                <button className='bet-btn' onClick={() => setBet(big6or8('Jake', wagerAmount))}>Big 6 or 8</button>
            </div>
            <div className='page-wrapper'>
                <div className='page-top'>
                    <div className='play-field-wrapper card'>
                        
                    </div>
                    <div className='game-controls-wrapper'>
                        <WagerInput
                            bet={bet}
                            wagerAmount={wagerAmount}
                            setWagerAmount={setWagerAmount}
                            setCurrentBets={setCurrentBets}
                            setRollHistory={setRollHistory}
                        />
                        <DieFace  setRollHistory={setRollHistory} />
                    </div>
                    
                </div>
                <div className='page-bottom'>
                    <RollHistory rollHistory={rollHistory} />
                    <BetHistory currentBets={currentBets} />
                </div>                
            </div>
            
            {/* <WagerInfo bet={bet} /> */}
            

        </div>
    )
};

export default FunctionTestPage;