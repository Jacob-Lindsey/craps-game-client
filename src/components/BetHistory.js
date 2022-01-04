import { Delete } from "@material-ui/icons";

const BetHistory = (props) => {

    const currentBets = props.currentBets;

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
                        <div className='current-bet-details' key={index}>
                            <h2>{bet.betName}</h2>
                            <p>{bet.winConditions && bet.winConditions.join(", ")}</p>
                            <p>{bet.payout.toFixed(1)}</p>
                            <p>{bet.wager}</p>
                            <Delete />
                        </div>
                    )
                })}
        </div>
    )
};

export default BetHistory;