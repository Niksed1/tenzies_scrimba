import './Die.css';

export default function Die (props) {
    return (
        <div>
            <button className="die">{props.value}</button>
        </div>
    );
}