const Chip = (props) => {

    const number = props.number;
    const pos = props.position;
    const type = props.type;

    const chip5 = <span className={`chip-5 centered ${pos}`}>$5</span>
    const chip10 = <span className={`chip-10 centered ${pos}`}>$10</span>
    const chip25 = <span className={`chip-25 centered ${pos}`}>$25</span>
    const chip100 = <span className={`chip-100 centered ${pos}`}>$100</span>
    let chip;

    if (number === 5) {
        chip = chip5;
    } else if (number === 10) {
        chip = chip10;
    } else if (number === 25) {
        chip = chip25;
    } else if (number === 100) {
        chip = chip100;
    }

    return chip;

};

export default Chip;