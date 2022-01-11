import { useState } from "react";
import useStickyState from "../utils/useStickyState";

export const useGlobalState = () => {

    const [bet, setBet] = useState();
    const [betPreview, setBetPreview] = useState();
    const [streak, setStreak] = useState(0);
    const [selectBet, setSelectBet] = useState();
    const [currentBets, setCurrentBets] = useState([]);
    const [wagerAmount, setWagerAmount] = useState(5);
    const [rollHistory, setRollHistory] = useState([]);
    const [point, setPoint] = useState(null);
    const [gameMessage, setGameMessage] = useState();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState();
    const [chips, setChips] = useState([]);

    // Uses a custom hook to persist the chip balance in localStorage  
    const [balance, setBalance] = useStickyState(0, 'balance');

    return {
        balance,
        bet,
        betPreview,
        streak,
        selectBet,
        currentBets,
        wagerAmount,
        rollHistory,
        point,
        gameMessage,
        open,
        error,
        chips,
        setBalance,
        setBet,
        setBetPreview,
        setStreak,
        setSelectBet,
        setCurrentBets,
        setWagerAmount,
        setRollHistory,
        setPoint,
        setGameMessage,
        setOpen,
        setError,
        setChips,
    };
};