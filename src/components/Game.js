import { useState } from 'react';
import { SnackbarContent } from '@mui/material';
import { Snackbar } from '@mui/material';
import TableLayout from './TableLayout';
import DieFace from './DieFace';
import BetHistory from './BetHistory';
import RollHistory from './RollHistory';
import WagerInput from './WagerInput';

import '../App.css';

const Game = () => {

    const [balance, setBalance] = useState(0);
    const [bet, setBet] = useState();
    const [streak, setStreak] = useState(0);
    const [selectBet, setSelectBet] = useState();
    const [currentBets, setCurrentBets] = useState([]);
    const [wagerAmount, setWagerAmount] = useState(0);
    const [rollHistory, setRollHistory] = useState([]);
    const [point, setPoint] = useState();
    const [gameMessage, setGameMessage] = useState();
    const [open, setOpen] = useState(false);
    const [chips, setChips] = useState([]);

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <div className='container'>
                <div className='page-wrapper'>
                    <div className='page-top'>
                        <div className='play-field-wrapper card'>
                                <TableLayout 
                                    bet={bet}
                                    chips={chips}
                                    streak={streak}
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
                                setChips={setChips}
                                selectBet={selectBet}
                                setSelectBet={setSelectBet}
                                wagerAmount={wagerAmount}
                                setWagerAmount={setWagerAmount}
                                setCurrentBets={setCurrentBets}
                            />
                            <DieFace
                                setRollHistory={setRollHistory}
                                balance={balance}
                                setStreak={setStreak}
                                setBalance={setBalance}
                                point={point}
                                setPoint={setPoint}
                                setGameMessage={setGameMessage}
                                setOpen={setOpen}
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
                {gameMessage ? 
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        key={Date.now}
                        
                    >
                        <SnackbarContent 
                            style={{
                                backgroundColor: '#258928',
                                color: '#fff',
                                fontWeight: '700'
                            }}
                            message={gameMessage}
                        />
                    </Snackbar>
                : ''}
            </div>
        </>
    )
};

export default Game;