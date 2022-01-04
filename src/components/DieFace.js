import { useState } from "react";
import { roll } from '../utils/rollDice';

const DieFace = (props) => {

    const [die1, setDie1] = useState();
    const [die2, setDie2] = useState();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    let pips1 = [];
    let pips2 = [];

    const setHistory = props.setRollHistory;

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
        setHistory(oldRollHistory => [...oldRollHistory, [pips1,pips2]]);
    };

    return (
        <div className='roll-wrapper card'>
            <div className='card-header-top header-fixed'>Roll Dice</div>
            <div className='roll-result'>
                <div className='die-face'>
                    {die1 && <> {p1} </> }
                </div>
                <div className='die-face'>
                    {die2 && <> {p2} </> }
                </div>
            </div>
            <button className='bet-btn green-btn' onClick={() => handleRoll()}>ROLL</button>
        </div>
    )
};

export default DieFace;