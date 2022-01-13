import { useState } from "react";
import { useStore } from "../store/useStore";
import { roll } from '../utils/rollDice';
import gameLoop from "../utils/gameLoop";

const DieFace = () => {

    const [die1, setDie1] = useState();
    const [die2, setDie2] = useState();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    let pips1 = [];
    let pips2 = [];

    const { setBalance } = useStore();
    const { point, setPoint } = useStore();
    const { currentBets, setCurrentBets } = useStore();
    const { chips, setChips } = useStore();
    const { setGameMessage } = useStore();
    const { setOpen } = useStore();
    const { setRollHistory } = useStore();
    const { setStreak } = useStore();

    const handleRoll = () => {
        const rollResult = roll();
        const d1 = rollResult[0];
        const d2 = rollResult[1];
        const rollValue = d1 + d2;
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
        gameLoop(currentBets, setCurrentBets, setBalance, point, setPoint, rollValue, setGameMessage, setOpen, setStreak, chips, setChips, d1);
    };

    return (
        <div className='roll-wrapper card'>
            <div className='card-header-top header-fixed'>Roll Dice</div>
            <div className="card-body">
                <div className='roll-result'>
                    <div className='die-face'>
                        {die1 && <> {p1} </> }
                    </div>
                    <div className='die-face'>
                        {die2 && <> {p2} </> }
                    </div>
                </div>
            </div>
            <button className='bet-btn green-btn' onClick={() => handleRoll()}>ROLL</button>
        </div>
    )
};

export default DieFace;