import { useState } from 'react';
import TableLayout from './TableLayout';
import DieFace from './DieFace';
import BetHistory from './BetHistory';
import RollHistory from './RollHistory';
import WagerInput from './WagerInput';

import '../App.css';

const Game = () => {

    const [balance, setBalance] = useState(0);
    const [bet, setBet] = useState();
    const [selectBet, setSelectBet] = useState();
    const [currentBets, setCurrentBets] = useState([]);
    const [wagerAmount, setWagerAmount] = useState(0);
    const [rollHistory, setRollHistory] = useState([]);
    const [point, setPoint] = useState();
    const [gameMessage, setGameMessage] = useState();

    return (
        <>
            <div className='container'>
                <div className='page-wrapper'>
                    <div className='page-top'>
                        <div className='play-field-wrapper card'>
                                <TableLayout 
                                    bet={bet}
                                    point={point}
                                    setBet={setBet}
                                    setSelectBet={setSelectBet}
                                    wagerAmount={wagerAmount}
                                />
                            <img src='/Craps_table_layout.png' alt='' />
                        </div>
                        <div className='game-controls-wrapper'>
                            <WagerInput
                                balance={balance}
                                setBalance={setBalance}
                                selectBet={selectBet}
                                setSelectBet={setSelectBet}
                                wagerAmount={wagerAmount}
                                setWagerAmount={setWagerAmount}
                                setCurrentBets={setCurrentBets}
                            />
                            <DieFace
                                setRollHistory={setRollHistory}
                                balance={balance}
                                setBalance={setBalance}
                                point={point}
                                setPoint={setPoint}
                                setGameMessage={setGameMessage}
                            />
                        </div>
                    </div>
                    <div className='page-bottom'>
                        <RollHistory rollHistory={rollHistory} />
                        <BetHistory 
                            currentBets={currentBets}
                            setCurrentBets={setCurrentBets}
                            setBalance={setBalance}
                        />
                    </div>                
                </div>
            </div>
            <div className='game-message'>
                {gameMessage ? gameMessage : 'Roll the dice to play!'}
            </div>
        </>
    )
};

export default Game;