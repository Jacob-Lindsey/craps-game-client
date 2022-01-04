const OnOffButton = (props) => {

    const point = props.point;

    return (
        <span className={`marker-button point-${point ? point : 'hidden'}`}>ON</span>
    )

};

export default OnOffButton;