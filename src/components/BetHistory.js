import { useStore } from "../store/useStore";
import removeBet from "../utils/removeBet";
import { Delete } from "@material-ui/icons";

const BetHistory = () => {

    const { chips, setChips } = useStore();
    const { currentBets, setCurrentBets } = useStore();
    const { point } = useStore();
    const { setBalance } = useStore();
    const { setError } = useStore();

    return (
        <div className='history-wrapper card'>
            <div className='card-header-bottom'>Current Bets</div>
            <div className='history-header'>
                <span>Bet Name</span>
                <span>Winning Rolls</span>
                <span>Losing Rolls</span>
                <span>Payout</span>
                <span>Wager</span>
            </div>
                {currentBets && currentBets.slice(0).reverse().map((bet, index) => {
                    return (
                        <div className='current-bet-details card' key={bet.id}>
                            <h4>{bet.betName}</h4>
                            <p>{bet.winConditions && bet.winConditions.join(", ")}</p>
                            <p>{bet.loseConditions && bet.loseConditions.join(", ")}</p>
                            <p>${bet.payout.toFixed(2)}</p>
                            <p>${bet.wager}</p>
                            {/* <Delete onClick={() => removeBet(bet, setBalance, currentBets, setCurrentBets, chips, point, setChips, setError)} /> */}
                        </div>
                    )
                })}
        </div>
    )
};

export default BetHistory;