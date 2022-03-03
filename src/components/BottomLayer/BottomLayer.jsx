import React from "react";
import "./BottomLayer.css";
import { Stage, Layer, Line, Circle } from 'react-konva';

export default function BottomLayer() {
    return (
        <div className="BottomLayer">
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
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
