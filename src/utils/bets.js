const passLine = (player, wager) => {

    let odds = 1;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Pass Line',
        contract: true,
        loseConditions: [],
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        point: null,
        wager: +wager,
        winConditions: [],
    }

    return bet;
};

// FIELD BET

const field = (player, wager, number) => {

    let odds;
    let loseArr;
    let winArr;
    if (number === 3 || number === 4 || number === 9 || number === 10 || number === 11 ) {
        odds = 1;
        loseArr = [2,5,6,7,8,12];
        winArr = [3,4,9,10,11];
    } else if (number === 2 || number === 12 ) {
        odds = 2;
        loseArr = [3,4,5,6,7,8,9,10,11];
        winArr = [2,12];
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
        wager: +wager,
        winConditions: winArr,
    }

    return bet;
};

// PLACE BETS

const place = (player, wager, number) => {

    let odds;
    if (number === 4 || number === 10) {
        odds = 9/5;
    } else if (number === 5 || number === 9) {
        odds = 7/5;
    } else if (number === 6 || number === 8) {
        odds = 6/5;
    } else {
        return 'Invalid bet: ' + number;
    }
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Place',
        contract: false,
        loseConditions: [],
        number: number,
        odds: odds,
        payout: payout,
        persistent: true,
        player: player,
        wager: +wager,
        winConditions: [],
    }

    return bet;
};

// LAY BETS

const lay = (player, wager, number) => {

    let odds;
    if (number === 4 || number === 10) {
        odds = 1/2;
    } else if (number === 5 || number === 9) {
        odds = 2/3;
    } else if (number === 6 || number === 8) {
        odds = 5/6;
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
        wager: +wager,
        winConditions: [7],
    }

    return bet;
};

// HARDWAY BETS


// ONE TIME BETS

const any7 = (player, wager) => {

    let odds = 4;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Any 7',
        contract: false,
        loseConditions: [],
        number: 7,
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [],
    }

    return bet;
};

const anyCraps = (player, wager) => {

    let odds = 7;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Any Craps',
        contract: false,
        loseConditions: [4,5,6,7,8,9,10],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [2,3,11,12],
    }

    return bet;
};

const craps2or12 = (player, wager) => {

    let odds = 30;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Craps 2 or 12',
        contract: false,
        loseConditions: [3,4,5,6,7,8,9,10,11],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [2,12],
    }

    return bet;
};

const craps3or11 = (player, wager) => {

    let odds = 15;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Craps 3 or 11',
        contract: false,
        loseConditions: [2,4,5,6,7,8,9,10,12],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [3,11],
    }

    return bet;
};

const horn3or11 = (player, wager) => {

    let odds = 3.75;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Horn 3 or 11',
        contract: false,
        loseConditions: [2,4,5,6,7,8,9,10,12],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [3,11],
    }

    return bet;
};

const horn2or12 = (player, wager) => {

    let odds = 7.5;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Horn 2 or 12',
        contract: false,
        loseConditions: [3,4,5,6,7,8,9,10,11],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [2,12],
    }

    return bet;
};

const big6or8 = (player, wager) => {

    let odds = 1;
    let payout = +wager + (wager*odds);

    let bet = {
        betName: 'Big 6 or 8',
        contract: false,
        loseConditions: [2,3,4,5,7,9,10,11,12],
        odds: odds,
        payout: payout,
        persistent: false,
        player: player,
        wager: +wager,
        winConditions: [6,8],
    }

    return bet;
};

module.exports = {
    passLine,
    field,
    place,
    lay,
    any7,
    anyCraps,
    craps2or12,
    craps3or11,
    horn3or11,
    horn2or12,
    big6or8
};