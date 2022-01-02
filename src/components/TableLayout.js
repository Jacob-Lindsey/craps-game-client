import { useRef, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Tooltip, tooltipClasses } from '@mui/material';
import { passLine, field, place, lay, any7, anyCraps, craps2or12, craps3or11, horn3or11, horn2or12, big6or8 } from '../utils/bets';

const TableLayout = (props) => {

    const bet = props.bet;
    const setBet = props.setBet;
    
    const tooltipContent = bet ? <div className="tooltip-card">
                                    <span className="tooltip-header">{bet.betName}&nbsp;{bet.number}</span>
                                    <span className="tooltip-body">
                                        <span>Odds: {bet.odds.toFixed(2)}:1</span>
                                        <span>Payout: {bet.payout.toFixed(2)}</span>  
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
                <div className="dont-come"></div>
                <div
                    className="place-four"
                    onMouseEnter={() => setBet(place('Jake', 10, 4))}
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="place-five" 
                    onMouseEnter={() => setBet(place('Jake', 10, 5))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="place-six" 
                    onMouseEnter={() => setBet(place('Jake', 10, 6))}
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="place-eight" 
                    onMouseEnter={() => setBet(place('Jake', 10, 8))}
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="place-nine" 
                    onMouseEnter={() => setBet(place('Jake', 10, 9))}
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="place-ten" 
                    onMouseEnter={() => setBet(place('Jake', 10, 10))}
                    onMouseLeave={() => setBet(null)}
                />
                <div className="come"></div>
                <div className="field">
                    <div
                        className="field-2" 
                        onMouseEnter={() => setBet(field('Jake', 10, 2))} 
                        onMouseLeave={() => setBet(null)}
                    />
                    <div
                        className="field-12" 
                        onMouseEnter={() => setBet(field('Jake', 10, 12))} 
                        onMouseLeave={() => setBet(null)}
                    />
                    <div
                        className="field-middle" 
                        onMouseEnter={() => setBet(field('Jake', 10, 10))} 
                        onMouseLeave={() => setBet(null)}
                    />
                </div>
                <div className="dont-pass"></div>
                <div
                    className="passline-left" 
                    onMouseEnter={() => setBet(passLine('Jake', 10))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div className="buy-nine"></div>
                <div className="buy-eight"></div>
                <div className="buy-six"></div>
                <div className="buy-five"></div>
                <div className="buy-four"></div>
                <div className="buy-ten"></div>
                <div
                    className="lay-four" 
                    onMouseEnter={() => setBet(lay('Jake', 10, 4))}
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="lay-five" 
                    onMouseEnter={() => setBet(lay('Jake', 10, 5))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="lay-six" 
                    onMouseEnter={() => setBet(lay('Jake', 10, 6))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="lay-eight" 
                    onMouseEnter={() => setBet(lay('Jake', 10, 8))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="lay-nine" 
                    onMouseEnter={() => setBet(lay('Jake', 10, 9))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div
                    className="lay-ten" 
                    onMouseEnter={() => setBet(lay('Jake', 10, 10))} 
                    onMouseLeave={() => setBet(null)}
                />
                <div className="buy-four-bottom"></div>
                <div className="buy-five-bottom"></div>
                <div className="buy-six-bottom"></div>
                <div className="buy-eight-bottom"></div>
                <div className="buy-nine-bottom"></div>
                <div className="buy-ten-bottom"></div>
                <div className="dont-pass-bottom"></div>
                <div className="big-six">
                    <div
                        className="big-six-bet" 
                        onMouseEnter={() => setBet(big6or8('Jake', 10, 6))} 
                        onMouseLeave={() => setBet(null)}
                    />
                </div>
                <div className="big-eight">
                    <div
                        className="big-eight-bet" 
                        onMouseEnter={() => setBet(big6or8('Jake', 10, 8))} 
                        onMouseLeave={() => setBet(null)}
                    />
                </div>
                <div
                    className="passline-bottom" 
                    onMouseEnter={() => setBet(passLine('Jake', 10))} 
                    onMouseLeave={() => setBet(null)}
                />
            </div>
        </CustomTooltip>
    )

};

export default TableLayout;