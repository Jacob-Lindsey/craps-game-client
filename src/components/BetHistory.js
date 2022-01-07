import { useStore } from "../store/useStore";
import removeBet from "../utils/removeBet";
import { Delete } from "@material-ui/icons";

const BetHistory = () => {

    const { chips, setChips } = useStore();
    const { currentBets, setCurrentBets } = useStore();
    const { setBalance } = useStore();

    return (
        <div className='history-wrapper card'>
            <div className='card-header-bottom'>Current Bets</div>
            <div className='history-header'>
                <span>Bet Name</span>
                <span>Winning Rolls</span>
                <span>Payout</span>
                <span>Wager</span>
            </div>
                {currentBets && currentBets.slice(0).reverse().map((bet, index) => {
                    return (
                        <div className='current-bet-details card' key={bet.id}>
                            <h2>{bet.betName}</h2>
                            <p>{bet.winConditions && bet.winConditions.join(", ")}</p>
                            <p>{bet.payout.toFixed(1)}</p>
                            <p>{bet.wager}</p>
                            <Delete onClick={() => removeBet(bet, setBalance, currentBets, setCurrentBets, chips, setChips)} />
                        </div>
                    )
                })}
        </div>
    )
};

export default BetHistory;