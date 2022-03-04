import React from "react";
import "./BottomLayer.css";
import { Stage, Layer, Line, Circle } from 'react-konva';

export default function BottomLayer() {

    const verticalLines = [];
    const horizontalLines = [];

    function renderVerticalLines() {
        for(let i = 0; i < 150; i++) {
            verticalLines.push(
                <Line
                    x={10+(10*i)}
                    y={0}
                    points={[0, 0, 0, window.innerHeight, 0, 0]}
                    tension={0.5}
                    stroke="rgba(182, 188, 190, 0.1)"
                />
            );
        }
    }
    
    function renderHorizontalLines() {
        for(let i = 0; i < 150; i++) {
            horizontalLines.push(
                <Line
                    x={0}
                    y={10+(10*i)}
                    points={[0, 0,  window.innerWidth, 0, 0, 0]}
                    tension={0.5}
                    stroke="rgba(182, 188, 190, 0.1)"
                />
            );
        }
    }

    renderVerticalLines();
    renderHorizontalLines();

    return (
        <div className="BottomLayer">
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {verticalLines}
                    {horizontalLines}
                    <Line
                        x={0}
                        y={0}
                        points={[0, 0, 0, 0, 600, 600]}
                        tension={0.5}
                        stroke="rgb(182, 188, 190)"
                    />
                    <Line
                        x={0}
                        y={80}
                        points={[0, 0, 0, 0, 600, 595]}
                        tension={0.5}
                        stroke="rgb(182, 188, 190)"
                    />
                    <Line
                        x={80}
                        y={0}
                        points={[0, 0, 0, 0, 500, 500]}
                        tension={0.5}
                        stroke="rgb(182, 188, 190)"
                    />
                    <Line
                        x={window.innerWidth}
                        y={window.innerHeight}
                        points={[0, 0, 0, 0, -600, -595]}
                        tension={0.5}
                        stroke="rgb(182, 188, 190)"
                    />
                    <Line
                        x={window.innerWidth}
                        y={window.innerHeight - 80}
                        points={[0, 0, 0, 0, -600, -600]}
                        tension={0.5}
                        stroke="rgb(182, 188, 190)"
                    />
                    <Line
                        x={window.innerWidth - 80}
                        y={window.innerHeight}
                        points={[0, 0, 0, 0, -500, -500]}
                        tension={0.5}
                        stroke="rgb(182, 188, 190)"
                    />
                    <Circle x={0} y={0} stroke="rgb(182, 188, 190)" radius={300} />
                    <Circle x={0} y={0} stroke="rgb(182, 188, 190)" radius={320} />
                    <Circle x={window.innerWidth} y={window.innerHeight} stroke="rgb(182, 188, 190)" radius={300} />
                    <Circle x={window.innerWidth} y={window.innerHeight} stroke="rgb(182, 188, 190)" radius={320} />
                </Layer>
            </Stage>
        </div>
    );
}
