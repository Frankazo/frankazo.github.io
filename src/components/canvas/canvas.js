import React, { useRef } from 'react';

import './canvas.css';


const Canvas = () => {

    const canvasRef = useRef(null)
    
    return(
        <div>
            <canvas 
                ref={canvasRef}
            />
        </div>
    )
}
    

export default Canvas