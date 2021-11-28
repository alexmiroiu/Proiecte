
const Controls = (props) => {

    

    return <div>
        <input type="color" value={props.color} onChange={event => {props.onColorChange(event.target.value)}} />
        <input type="range" value={props.size} min="1" max="10" onChange={event => {props.onSizeChange(event.target.value)}} />
    </div>
    

}

export default Controls;