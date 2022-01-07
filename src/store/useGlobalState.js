import { useState } from "react";
import useStickyState from "../utils/useStickyState";

export const useGlobalState = () => {

    const [testState, setTestState] = useState('TEST STATE WORKS');
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

    // Uses a custom hook to persist the chip balance in localStorage  
    const [balance, setBalance] = useStickyState(0, 'balance');

    return {
        testState,
        balance,
        bet,
        streak,
        selectBet,
        currentBets,
        wagerAmount,
        rollHistory,
        point,
        gameMessage,
        open,
        chips,
        setTestState,
        setBalance,
        setBet,
        setStreak,
        setSelectBet,
        setCurrentBets,
        setWagerAmount,
        setRollHistory,
        setPoint,
        setGameMessage,
        setOpen,
        setChips,
    };
};