import './Die.css';
import {useState} from 'react';

export default function Die (props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div>
            <button className="die" style={styles} onClick={() => props.click(props.id)}>{props.value}</button>
        </div>
    );
}