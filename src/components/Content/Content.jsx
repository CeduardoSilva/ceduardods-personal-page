import React from "react";
import './Content.css';
import Welcome from "../../views/Welcome/Welcome";
import AboutMe from "../../views/AboutMe/AboutMe";

export default function Content(props) {
  const { currentTab } = props;
  return (
    <main>
      {(currentTab === 'Welcome') ? <Welcome/> : <AboutMe/>}
    </main>
  )
}
