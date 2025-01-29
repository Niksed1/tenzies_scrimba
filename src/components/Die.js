import './Die.css';

export default function Die (props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <button className="die" 
            style={styles} 
            onClick={() => props.click(props.id)} 
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >{props.value}</button>
        
    );
}