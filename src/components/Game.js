import { useStore } from '../store/useStore';
import { SnackbarContent } from '@mui/material';
import { Snackbar } from '@mui/material';
import TableLayout from './TableLayout';
import DieFace from './DieFace';
import BetHistory from './BetHistory';
import RollHistory from './RollHistory';
import WagerInput from './WagerInput';
import '../App.css';

const Game = () => {

    const { gameMessage } = useStore();
    const { open, setOpen } = useStore();

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <div className='container'>
                <div className='page-wrapper'>
                    <div className='page-top'>
                        <div className='play-field-wrapper card'>
                                <TableLayout />
                            <img src='/Craps_table_layout.png' alt='' />
                        </div>
                        <div className='game-controls-wrapper'>
                            <WagerInput />
                            <DieFace />
                        </div>
                    </div>
                    <div className='page-bottom'>
                        <RollHistory />
                        <BetHistory />
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