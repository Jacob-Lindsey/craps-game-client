const Chance = require('chance');
const chance = new Chance();

module.exports.roll = () => {
    let rolls = [];
    rolls.push(chance.d6());
    rolls.push(chance.d6());
    return rolls;
};