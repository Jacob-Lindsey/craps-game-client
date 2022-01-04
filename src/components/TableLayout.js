import { useRef, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Tooltip, tooltipClasses } from '@mui/material';
import { passLine, dontPassLine, come, dontCome, field, place, lay, any7, anyCraps, craps2or12, craps3or11, horn3or11, horn2or12, propTwo, propThree, propEleven, propTwelve, big6or8, hardway } from '../utils/bets';

const TableLayout = (props) => {

    const bet = props.bet;
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
                <div className="dont-come" 
                    onMouseEnter={() => setBet(dontCome('Jake', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-four"
                    onMouseEnter={() => setBet(place('Jake', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-five" 
                    onMouseEnter={() => setBet(place('Jake', wager, 5))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-six" 
                    onMouseEnter={() => setBet(place('Jake', wager, 6))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-eight" 
                    onMouseEnter={() => setBet(place('Jake', wager, 8))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-nine" 
                    onMouseEnter={() => setBet(place('Jake', wager, 9))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="place-ten" 
                    onMouseEnter={() => setBet(place('Jake', wager, 10))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="come" 
                    onMouseEnter={() => setBet(come('Jake', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="field">
                    <div
                        className="field-2" 
                        onMouseEnter={() => setBet(field('Jake', wager, 2))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="field-12" 
                        onMouseEnter={() => setBet(field('Jake', wager, 12))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="field-middle" 
                        onMouseEnter={() => setBet(field('Jake', wager, 10))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
                <div className="dont-pass" 
                    onMouseEnter={() => setBet(dontPassLine('Jake', wager))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="passline-left" 
                    onMouseEnter={() => setBet(passLine('Jake', 10))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-nine"></div>
                <div className="buy-eight"></div>
                <div className="buy-six"></div>
                <div className="buy-five"></div>
                <div className="buy-four"></div>
                <div className="buy-ten"></div>
                <div
                    className="lay-four" 
                    onMouseEnter={() => setBet(lay('Jake', wager, 4))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-five" 
                    onMouseEnter={() => setBet(lay('Jake', wager, 5))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-six" 
                    onMouseEnter={() => setBet(lay('Jake', wager, 6))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-eight" 
                    onMouseEnter={() => setBet(lay('Jake', wager, 8))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-nine" 
                    onMouseEnter={() => setBet(lay('Jake', wager, 9))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div
                    className="lay-ten" 
                    onMouseEnter={() => setBet(lay('Jake', wager, 10))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="buy-four-bottom"></div>
                <div className="buy-five-bottom"></div>
                <div className="buy-six-bottom"></div>
                <div className="buy-eight-bottom"></div>
                <div className="buy-nine-bottom"></div>
                <div className="buy-ten-bottom"></div>
                <div className="dont-pass-bottom" 
                    onMouseEnter={() => setBet(dontPassLine('Jake', wager))}
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="big-six">
                    <div
                        className="big-six-bet" 
                        onMouseEnter={() => setBet(big6or8('Jake', wager, 6))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
                <div className="big-eight">
                    <div
                        className="big-eight-bet" 
                        onMouseEnter={() => setBet(big6or8('Jake', wager, 8))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
                <div
                    className="passline-bottom" 
                    onMouseEnter={() => setBet(passLine('Jake', 10))} 
                    onMouseLeave={() => setBet(null)}
                    onClick={() => setSelectBet(bet)}
                />
                <div className="prop-bets">
                    <div
                        className="any-7" 
                        onMouseEnter={() => setBet(any7('Jake', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div 
                        className="hard-6" 
                        onMouseEnter={() => setBet(hardway('Jake', wager, 6))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div 
                        className="hard-10" 
                        onMouseEnter={() => setBet(hardway('Jake', wager, 10))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div 
                        className="hard-8" 
                        onMouseEnter={() => setBet(hardway('Jake', wager, 8))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="hard-4" 
                        onMouseEnter={() => setBet(hardway('Jake', wager, 4))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div className="prop-2-3-12">
                        <div 
                            className="ace-deuce"
                            onMouseEnter={() => setBet(propThree('Jake', wager))} 
                            onMouseLeave={() => setBet(null)}
                            onClick={() => setSelectBet(bet)}
                        />
                        <div 
                            className="ace-ace"
                            onMouseEnter={() => setBet(propTwo('Jake', wager))} 
                            onMouseLeave={() => setBet(null)}
                            onClick={() => setSelectBet(bet)}
                        />
                        <div 
                            className="six-six"
                            onMouseEnter={() => setBet(propTwelve('Jake', wager))} 
                            onMouseLeave={() => setBet(null)}
                            onClick={() => setSelectBet(bet)}
                        />
                    </div>
                    <div 
                        className="six-five"
                        onMouseEnter={() => setBet(propEleven('Jake', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                    <div
                        className="any-craps"
                        onMouseEnter={() => setBet(anyCraps('Jake', wager))} 
                        onMouseLeave={() => setBet(null)}
                        onClick={() => setSelectBet(bet)}
                    />
                </div>
            </div>
        </CustomTooltip>
    )

};

export default TableLayout;