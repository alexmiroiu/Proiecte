import React, { useEffect, useRef, useState } from "react";
import classes from './Canvas.module.css';

const Canvas = () => {
    const [isDrawing, setIsDrawing] = useState(false);

    const canvasRef = useRef();
    const contextRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 80/100;
        canvas.height = window.innerHeight * 80/100;

        const context = canvas.getContext('2d');
        
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 3;
        contextRef.current = context;
    }, [])

    const startDrawing = ({nativeEvent}) => {
        console.log(nativeEvent)
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }


return <canvas className={classes.canvasItem} ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw}></canvas>;
}

export default Canvas;