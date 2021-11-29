import classes from './Controls.module.css';

const Controls = (props) => {

    

    return <div className={classes.controls}>
        <div className={classes.colorWrapper}>
            <input className={classes.colorInput} type="color" name="color" value={props.color} onChange={event => {props.onColorChange(event.target.value)}} />
            <label htmlFor="color">Choose brush color</label>
        </div>
        <div className={classes.rangeWrapper}>
            <span>{props.size}</span>
            <input className={classes.rangeInput} type="range" value={props.size} min="1" max="10" onChange={event => {props.onSizeChange(event.target.value)}} />
            <label htmlFor="range">Choose brush size</label>
        </div>
    </div>
    

}

export default Controls;