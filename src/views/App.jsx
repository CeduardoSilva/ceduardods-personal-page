import React, { useState, useEffect } from "react";
import "./App.css";
import TopMenu from '../components/TopMenu/TopMenu';
import Content from "../components/Content/Content";
import BottomLayer from "../components/BottomLayer/BottomLayer";

export default function MainPage() {

  const [currentTab, setCurrentTab] = useState('Welcome');

  function setTab(newTab) {
    setCurrentTab(newTab);
  }

  useEffect(() => {
    console.log(currentTab);
  },[currentTab]);

  return (
    <div>
      <BottomLayer/>
      <div className="ContentLayer">
        <TopMenu setCurrentTab={setTab} />
        <Content currentTab={currentTab}/>
      </div>
    </div>
  );
}
