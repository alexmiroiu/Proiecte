import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from './Canvas.module.css';

const Canvas = (props) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const canvasRef = useRef();
    const contextRef = useRef();

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    })


    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = windowWidth*80/100;
        canvas.height = windowHeight*50/100;
        console.log('useEFFECT one')
        
        const context = canvas.getContext('2d');
        context.lineCap = "round";
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        contextRef.current = context;

    }, [windowWidth, windowHeight])

    useEffect(() => {
        const canvas = canvasRef.current;
        
        const context = canvas.getContext('2d');
        context.lineCap = "round";
        context.strokeStyle = props.brushColor;
        context.lineWidth = props.brushSize;
        contextRef.current = context;


    }, [props.brushColor, props.brushSize])

    const clearCanvas = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0,0, windowWidth*80/100, windowHeight*50/100);
        setIsDrawing(false);
    }


    const startDrawing = ({nativeEvent}) => {
        // console.log(nativeEvent)
        const {offsetX, offsetY} = nativeEvent;
        setIsDrawing(true);
        contextRef.current.beginPath();
        contextRef.current.stroke();
        contextRef.current.moveTo(offsetX, offsetY);
        
        
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        if(offsetX > canvasRef.current.width || offsetY > canvasRef.current.height || offsetX < 0 || offsetY < 0) {
            // contextRef.current.closePath();
            setIsDrawing(false)
        }


    }

    const finishDrawing = () => {
        if(isDrawing) {
            contextRef.current.stroke();
            contextRef.current.closePath();
            setIsDrawing(false);

        }
    }


return( 
        <Fragment>
            <canvas className={classes.canvasItem} ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw}></canvas>;
            <button className={classes.button} onClick={clearCanvas}>Clear board</button>
        </Fragment>)
}

export default Canvas;