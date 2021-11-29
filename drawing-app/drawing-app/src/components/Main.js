import { Fragment, useState } from 'react';
import classes from './Main.module.css';


import Controls from './Controls';
import Canvas from './Canvas';

const Main = () => {
    const [selectedColor, setSelectedColor] = useState('black');
    const [brushSize, setBrushSize] = useState(1);

    const changeColor = (color) => {
        setSelectedColor(color);
        console.log(`color has been changed to ${selectedColor}`)
    }

    const changeBrushSize = (size) => {
        setBrushSize(size);
    }




    return <Fragment> 
    <h1>Go ahead and draw anything you like</h1>
    <Canvas brushColor={selectedColor} brushSize={brushSize}></Canvas>
    <div>
      <Controls onColorChange={changeColor} color={selectedColor} onSizeChange={changeBrushSize} size={brushSize}/>
    </div>
    </Fragment>
}

export default Main;