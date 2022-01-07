const passLine = (player, wager) => {

    let odds = 1;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Pass Line',
        contract: true,
        loseConditions: [7],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        point: null,
        position: 'passline-bottom',
        type: 'inside',
        wager: +wager,
        winConditions: [],
    }

    return bet;
};

const dontPassLine = (player, wager) => {

    let odds = 1;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: "Don't Pass Line",
        contract: true,
        loseConditions: [],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: 'dont-pass-bottom',
        point: null,
        type: 'inside',
        wager: +wager,
        winConditions: [7],
    }

    return bet;
};

const come = (player, wager, number) => {

    let odds = 1;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Come',
        contract: true,
        loseConditions: [7],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: 'come',
        point: null,
        type: 'inside',
        wager: +wager,
        winConditions: [number],
    }

    return bet;
};

const dontCome = (player, wager, number) => {

    let odds = 1;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: "Don't Come",
        contract: true,
        loseConditions: [number],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: 'dont-come',
        point: number,
        type: 'inside',
        wager: +wager,
        winConditions: [7],
    }

    return bet;
};

// FIELD BET

const field = (player, wager, number) => {

    let odds;
    let loseArr;
    let winArr;
    let position;

    if (number === 3 || number === 4 || number === 9 || number === 10 || number === 11 ) {
        odds = 1;
        loseArr = [2,5,6,7,8,12];
        winArr = [3,4,9,10,11];
        position = 'field-middle';
    } else if (number === 2 || number === 12 ) {
        odds = 2;
        loseArr = [3,4,5,6,7,8,9,10,11];
        winArr = [2,12];
        position = number === 2 ? 'field-2' : 'field-12';
    } else {
        return 'Invalid bet' + number;
    }
    let payout = +wager + (wager*odds);
    

    let bet = {
        betName: 'Field Bet',
        contract: false,
        loseConditions: loseArr,
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'field',
        wager: +wager,
        winConditions: winArr,
    }

    return bet;
};

// PLACE BETS

const place = (player, wager, number) => {

    let odds;
    let position;
    if (number === 4 || number === 10) {
        odds = 9/5;
        position = number === 4 ? 'place-four' : 'place-ten';
    } else if (number === 5 || number === 9) {
        odds = 7/5;
        position = number === 5 ? 'place-five' : 'place-nine';
    } else if (number === 6 || number === 8) {
        odds = 6/5;
        position = number === 6 ? 'place-six' : 'place-eight';
    } else {
        return 'Invalid bet: ' + number;
    }
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Place',
        contract: false,
        loseConditions: [7],
        number: number,
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: position,
        type: 'inside',
        wager: +wager,
        winConditions: [number],
    }

    return bet;
};

// LAY BETS

const lay = (player, wager, number) => {

    let odds;
    let position;
    if (number === 4 || number === 10) {
        odds = 1/2;
        position = number === 4 ? 'lay-four' : 'lay-ten';
    } else if (number === 5 || number === 9) {
        odds = 2/3;
        position = number === 5 ? 'lay-five' : 'lay-nine';
    } else if (number === 6 || number === 8) {
        odds = 5/6;
        position = number === 6 ? 'lay-six' : 'lay-eight';
    } else {
        return 'Invalid bet: ' + number;
    }
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Lay',
        contract: false,
        loseConditions: [number],
        number: number,
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: position,
        type: 'inside',
        wager: +wager,
        winConditions: [7],
    }

    return bet;
};

// BUY BETS

const buy = (player, wager, number) => {

    let odds;
    let position;
    if (number === 4 || number === 10) {
        odds = 2;
        position = number === 4 ? 'buy-four' : 'buy-ten';
    } else if (number === 5 || number === 9) {
        odds = 3/2;
        position = number === 5 ? 'buy-five' : 'buy-nine';
    } else if (number === 6 || number === 8) {
        odds = 6/5;
        position = number === 6 ? 'buy-six' : 'buy-eight';
    } else {
        return 'Invalid bet: ' + number;
    }
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Buy',
        contract: false,
        loseConditions: [7],
        number: number,
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: position,
        type: 'inside',
        wager: +wager,
        winConditions: [number],
    }

    return bet;
};

// HARDWAY BETS

const hardway = (player, wager, number) => {

    let odds;
    let position;
    if (number === 4 || number === 10) {
        odds = 7;
        position = number === 4 ? 'hard-4' : 'hard-10';
    } else if (number === 6 || number === 8) {
        odds = 9;
        position = number === 6 ? 'hard-6' : 'hard-8';
    }
    let payout = +wager + (wager*odds);
    let hardwayValue = number/2;

    let bet = {
        betName: 'Hardway',
        contract: false,
        hardway: hardwayValue,
        loseConditions: [7],
        number: number,
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: position,
        type: 'prop',
        wager: +wager,
        winConditions: [number],
    }

    return bet;
};

// ONE TIME BETS

const any7 = (player, wager) => {

    let odds = 4;
    let payout = +wager + (wager*odds);
    let position = 'any-7';

    let bet = {
        betName: 'Any',
        contract: false,
        loseConditions: [2,3,4,5,6,8,9,10,11,12],
        number: 7,
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'prop',
        wager: +wager,
        winConditions: [7],
    }

    return bet;
};

const propEleven = (player, wager) => {
    
    let odds = 15;
    let payout = +wager + (wager*odds);
    let position = 'six-five';

    let bet = {
        betName: 'Prop Bet - 11',
        contract: false,
        loseConditions: [2,3,4,5,6,7,8,9,10.12],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'prop',
        wager: +wager,
        winConditions: [11],
    }

    return bet;
};

const propThree = (player, wager) => {
    
    let odds = 15;
    let payout = +wager + (wager*odds);
    let position = 'ace-deuce';

    let bet = {
        betName: 'Prop Bet - Ace-Deuce',
        contract: false,
        loseConditions: [2,4,5,6,7,8,9,10.11,12],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'prop-2-3-12',
        wager: +wager,
        winConditions: [3],
    }

    return bet;
};

const propTwo = (player, wager) => {
    
    let odds = 30;
    let payout = +wager + (wager*odds);
    let position = 'ace-ace';

    let bet = {
        betName: 'Prop Bet - Aces',
        contract: false,
        loseConditions: [3,4,5,6,7,8,9,10.11,12],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'prop-2-3-12',
        wager: +wager,
        winConditions: [2],
    }

    return bet;
};

const propTwelve = (player, wager) => {
    
    let odds = 30;
    let payout = +wager + (wager*odds);
    let position = 'six-six';

    let bet = {
        betName: 'Prop Bet - 12',
        contract: false,
        loseConditions: [2,3,4,5,6,7,8,9,10.11],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'prop-2-3-12',
        wager: +wager,
        winConditions: [12],
    }

    return bet;
};

const anyCraps = (player, wager) => {

    let odds = 7;
    let payout = +wager + (wager*odds);
    let position = 'any-craps';

    let bet = {
        betName: 'Any Craps',
        contract: false,
        loseConditions: [4,5,6,7,8,9,10],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        position: position,
        type: 'prop',
        wager: +wager,
        winConditions: [2,3,11,12],
    }

    return bet;
};

const big6 = (player, wager) => {

    let odds = 1;
    let payout = +wager + (wager*odds);
    let position = 'big-six-bet';

    let bet = {
        betName: 'Big 6',
        contract: false,
        loseConditions: [7],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: position,
        type: 'big6',
        wager: +wager,
        winConditions: [6],
    }

    return bet;
};

const big8 = (player, wager) => {

    let odds = 1;
    let payout = +wager + (wager*odds);
    let position = 'big-eight-bet';

    let bet = {
        betName: 'Big 8',
        contract: false,
        loseConditions: [7],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        position: position,
        type: 'big8',
        wager: +wager,
        winConditions: [6],
    }

    return bet;
};

module.exports = {
    passLine,
    dontPassLine,
    come,
    dontCome,
    field,
    place,
    lay,
    buy,
    any7,
    anyCraps,
    hardway,
    /* craps2or12,
    craps3or11, */
    propEleven,
    propTwelve,
    propTwo,
    propThree,
    /* horn3or11,
    horn2or12, */
    big6,
    big8
};