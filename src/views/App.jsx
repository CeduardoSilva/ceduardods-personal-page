import React from "react";
import "./App.css";
import TopMenu from '../components/TopMenu/TopMenu';
import Content from "../components/Content/Content";
import { Stage, Layer, Line } from 'react-konva';

export default function MainPage() {
  return (
    <div>
      <div className="BottomLayer">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {/** Left Lines*/ }
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
            {/** Right Lines*/ }
            <Line
              x={window.innerWidth}
              y={window.innerHeight}
              points={[0, 0, 0, 0, -600, -595]}
              tension={0.5}
              stroke="rgb(182, 188, 190)"
            />
            <Line
              x={window.innerWidth}
              y={window.innerHeight-80}
              points={[0, 0, 0, 0, -600, -600]}
              tension={0.5}
              stroke="rgb(182, 188, 190)"
            />
            <Line
              x={window.innerWidth-80}
              y={window.innerHeight}
              points={[0, 0, 0, 0, -500, -500]}
              tension={0.5}
              stroke="rgb(182, 188, 190)"
            />
          </Layer>
        </Stage>
      </div>
      <div className="ContentLayer">
        <TopMenu />
        <Content />
      </div>
    </div>
  );
}
