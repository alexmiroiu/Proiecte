import classes from './Controls.module.css';

const Controls = (props) => {

    

    return <div className={classes.controls}>
        <div className={classes.colorWrapper}>
            <label htmlFor="color">Choose brush color</label>
            <input className={classes.colorInput} type="color" name="color" value={props.color} onChange={event => {props.onColorChange(event.target.value)}} />
        </div>
        <div className={classes.rangeWrapper}>
            <label htmlFor="range">Choose brush size</label>
            <span>{props.size}</span>
            <input className={classes.rangeInput} type="range" value={props.size} min="1" max="20" onChange={event => {props.onSizeChange(event.target.value)}} />
        </div>
    </div>
    

}

export default Controls;