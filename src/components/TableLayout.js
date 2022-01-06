import { styled } from '@mui/material/styles';
import { Tooltip, tooltipClasses } from '@mui/material';
import { passLine, dontPassLine, come, dontCome, field, place, lay, buy, any7, anyCraps, propTwo, propThree, propEleven, propTwelve, big6, big8, hardway } from '../utils/bets';
import OnOffButton from './OnOffButton';
import Chip from './Chip';

const TableLayout = (props) => {

    const bet = props.bet;
    const chips = props.chips;
    const streak = props.streak;
    const point = props.point;
    const setBet = props.setBet;
    const setSelectBet = props.setSelectBet;
    const wagerAmount = props.wagerAmount;

    const wager = wagerAmount ? wagerAmount : 0;
    
    const tooltipContent = bet ? <div className="tooltip-card">
                                    <span className="tooltip-header">{bet.betName}&nbsp;{bet.number}</span>
                                    <span className="tooltip-body">
                                        <span>Odds: {bet.odds.toFixed(2)}:1</span>  
                                    </span>
                                    
                                 </div> : '';

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'rgb(38, 38, 46)',
            maxWidth: 500,
            padding: '0 1rem 1.5rem 1rem'
        },
    });

    return (
        <CustomTooltip title={tooltipContent} followCursor>            
            <div className="board-grid">
                {chips.length && chips.map((chip, index) => {
                    if (chip.type === 'inside') {
                        return (
                            <Chip
                                key={chip.id}
                                number={chip.number}
                                position={chip.position}
                            />
                        )
                    }
                })}
                <OnOffButton point={point} />
                <div className="streak-counter">{streak > 4 ? 'HOT STREAK: ' + streak : ''}</div>
                <div className="dont-come" 
                    onMouseEnter={() => setBet(dontCome('Player', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-four"
                    onMouseEnter={() => setBet(place('Player', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-five" 
                    onMouseEnter={() => setBet(place('Player', wager, 5))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-six" 
                    onMouseEnter={() => setBet(place('Player', wager, 6))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-eight" 
                    onMouseEnter={() => setBet(place('Player', wager, 8))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-nine" 
                    onMouseEnter={() => setBet(place('Player', wager, 9))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-ten" 
                    onMouseEnter={() => setBet(place('Player', wager, 10))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="come" 
                    onMouseEnter={() => setBet(come('Player', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="field">
                    {chips.length > 0 && chips.map((chip, index) => {
                        if (chip.type === 'field') {
                            return (
                                <Chip
                                    key={chip.id}
                                    number={chip.number}
                                    position={chip.position}
                                />
                            )
                        }
                    })}
                    <div
                        className="field-2" 
                        onMouseEnter={() => setBet(field('Player', wager, 2))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="field-12" 
                        onMouseEnter={() => setBet(field('Player', wager, 12))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="field-middle" 
                        onMouseEnter={() => setBet(field('Player', wager, 10))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
                <div className="dont-pass" 
                    onMouseEnter={() => setBet(dontPassLine('Player', wager))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="passline-left" 
                    onMouseEnter={() => setBet(passLine('Player', wager))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-nine"
                    onMouseEnter={() => setBet(buy('Player', wager, 9))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-eight" 
                    onMouseEnter={() => setBet(buy('Player', wager, 8))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-six" 
                    onMouseEnter={() => setBet(buy('Player', wager, 6))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-five" 
                    onMouseEnter={() => setBet(buy('Player', wager, 5))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-four" 
                    onMouseEnter={() => setBet(buy('Player', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-ten" 
                    onMouseEnter={() => setBet(buy('Player', wager, 10))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-four" 
                    onMouseEnter={() => setBet(lay('Player', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-five" 
                    onMouseEnter={() => setBet(lay('Player', wager, 5))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-six" 
                    onMouseEnter={() => setBet(lay('Player', wager, 6))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-eight" 
                    onMouseEnter={() => setBet(lay('Player', wager, 8))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-nine" 
                    onMouseEnter={() => setBet(lay('Player', wager, 9))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-ten" 
                    onMouseEnter={() => setBet(lay('Player', wager, 10))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-nine-bottom"
                    onMouseEnter={() => setBet(buy('Player', wager, 9))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-eight-bottom" 
                    onMouseEnter={() => setBet(buy('Player', wager, 8))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-six-bottom"
                    onMouseEnter={() => setBet(buy('Player', wager, 6))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-five-bottom"
                    onMouseEnter={() => setBet(buy('Player', wager, 5))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-four-bottom"
                    onMouseEnter={() => setBet(buy('Player', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-ten-bottom"
                    onMouseEnter={() => setBet(buy('Player', wager, 10))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="dont-pass-bottom" 
                    onMouseEnter={() => setBet(dontPassLine('Player', wager))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="big-six">
                    {chips.length > 0 && chips.map((chip, index) => {
                        if (chip.type === 'big6') {
                            return (
                                <Chip
                                    key={chip.id}
                                    number={chip.number}
                                    position={chip.position}
                                />
                            )
                        }
                    })}
                    <div
                        className="big-six-bet" 
                        onMouseEnter={() => setBet(big6('Player', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
                <div className="big-eight">
                    {chips.length > 0 && chips.map((chip, index) => {
                        if (chip.type === 'big8') {
                            return (
                                <Chip
                                    key={chip.id}
                                    number={chip.number}
                                    position={chip.position}
                                />
                            )
                        }
                    })}
                    <div
                        className="big-eight-bet" 
                        onMouseEnter={() => setBet(big8('Player', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
                <div
                    className="passline-bottom" 
                    onMouseEnter={() => setBet(passLine('Player', wager))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="prop-bets">
                    {chips.length > 0 && chips.map((chip, index) => {
                        if (chip.type === 'prop') {
                            return (
                                <Chip
                                    key={chip.id}
                                    number={chip.number}
                                    position={chip.position}
                                />
                            )
                        }
                    })}
                    <div
                        className="any-7" 
                        onMouseEnter={() => setBet(any7('Player', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div 
                        className="hard-6" 
                        onMouseEnter={() => setBet(hardway('Player', wager, 6))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div 
                        className="hard-10" 
                        onMouseEnter={() => setBet(hardway('Player', wager, 10))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div 
                        className="hard-8" 
                        onMouseEnter={() => setBet(hardway('Player', wager, 8))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="hard-4" 
                        onMouseEnter={() => setBet(hardway('Player', wager, 4))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div className="prop-2-3-12">
                        {chips.length > 0 && chips.map((chip, index) => {
                            if (chip.type === 'prop-2-3-12') {
                                return (
                                    <Chip
                                        key={chip.id}
                                        number={chip.number}
                                        position={chip.position}
                                    />
                                )
                            }
                        })}
                        <div 
                            className="ace-deuce"
                            onMouseEnter={() => setBet(propThree('Player', wager))} 
                            onMouseLeave={() => setBet(null)}
                            onClick={() => setSelectBet(bet)}
                        />
                        <div 
                            className="ace-ace"
                            onMouseEnter={() => setBet(propTwo('Player', wager))} 
                            onMouseLeave={() => setBet(null)}
                            onClick={() => setSelectBet(bet)}
                        />
                        <div 
                            className="six-six"
                            onMouseEnter={() => setBet(propTwelve('Player', wager))} 
                            onMouseLeave={() => setBet(null)}
                            onClick={() => setSelectBet(bet)}
                        />
                    </div>
                    <div 
                        className="six-five"
                        onMouseEnter={() => setBet(propEleven('Player', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="any-craps"
                        onMouseEnter={() => setBet(anyCraps('Player', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
            </div>
        </CustomTooltip>
    )

};

export default TableLayout;