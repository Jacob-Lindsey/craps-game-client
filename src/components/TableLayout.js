import { useRef, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Tooltip, tooltipClasses } from '@mui/material';
import { passLine, field, place, lay, any7, anyCraps, craps2or12, craps3or11, horn3or11, horn2or12, big6or8 } from '../utils/bets';

const TableLayout = (props) => {

    const bet = props.bet;
    const setBet = props.setBet;
    
    const tooltipContent = bet ? <div className="tooltip-card">
                                    <span>{bet.betName}</span>
                                    <span>{bet.odds}</span>
                                    <span>{bet.payout}</span>
                                 </div> : 'No bet selected';

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 500,
        },
    });

    return (
        <CustomTooltip title={tooltipContent} followCursor>            
            <div className="board-grid">
                <div className="dont-come"></div>
                <div onMouseOver={() => setBet(place('Jake', 10, 4))} className="place-four"></div>
                <div onMouseOver={() => setBet(place('Jake', 10, 5))} className="place-five"></div>
                <div onMouseOver={() => setBet(place('Jake', 10, 6))} className="place-six"></div>
                <div onMouseOver={() => setBet(place('Jake', 10, 8))} className="place-eight"></div>
                <div onMouseOver={() => setBet(place('Jake', 10, 9))} className="place-nine"></div>
                <div onMouseOver={() => setBet(place('Jake', 10, 10))} className="place-ten"></div>
                <div className="come"></div>
                <div className="field">
                    <div onMouseOver={() => setBet(field('Jake', 10, 2))} className="field-2"></div>
                    <div onMouseOver={() => setBet(field('Jake', 10, 12))} className="field-12"></div>
                    <div onMouseOver={() => setBet(field('Jake', 10, 10))} className="field-middle"></div>
                </div>
                <div className="dont-pass"></div>
                <div onMouseOver={() => setBet(passLine('Jake', 10))} className="passline-left"></div>
                <div className="buy-nine"></div>
                <div className="buy-eight"></div>
                <div className="buy-six"></div>
                <div className="buy-five"></div>
                <div className="buy-four"></div>
                <div className="buy-ten"></div>
                <div onMouseOver={() => setBet(lay('Jake', 10, 4))} className="lay-four"></div>
                <div onMouseOver={() => setBet(lay('Jake', 10, 5))} className="lay-five"></div>
                <div onMouseOver={() => setBet(lay('Jake', 10, 6))} className="lay-six"></div>
                <div onMouseOver={() => setBet(lay('Jake', 10, 8))} className="lay-eight"></div>
                <div onMouseOver={() => setBet(lay('Jake', 10, 9))} className="lay-nine"></div>
                <div onMouseOver={() => setBet(lay('Jake', 10, 10))} className="lay-ten"></div>
                <div className="buy-four-bottom"></div>
                <div className="buy-five-bottom"></div>
                <div className="buy-six-bottom"></div>
                <div className="buy-eight-bottom"></div>
                <div className="buy-nine-bottom"></div>
                <div className="buy-ten-bottom"></div>
                <div className="dont-pass-bottom"></div>
                <div className="big-six">
                    <div onMouseOver={() => setBet(big6or8('Jake', 10, 6))} className="big-six-bet"></div>
                </div>
                <div className="big-eight">
                    <div onMouseOver={() => setBet(big6or8('Jake', 10, 8))} className="big-eight-bet"></div>
                </div>
                <div onMouseOver={() => setBet(passLine('Jake', 10))} className="passline-bottom"></div>
            </div>
        </CustomTooltip>
    )

};

export default TableLayout;