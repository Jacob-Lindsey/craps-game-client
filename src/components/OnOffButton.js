import { useStore } from "../store/useStore";

const OnOffButton = () => {

    const { point } = useStore();

    return (
        <span className={`marker-button point-${point ? point : 'hidden'}`}>ON</span>
    )
};

export default OnOffButton;