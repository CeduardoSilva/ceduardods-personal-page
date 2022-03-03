import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./TopMenu.css";

export default function TopMenu(props) {

  const { setCurrentTab } = props;

  console.log(setCurrentTab)
  
  return (
    <aside className="TopMenu">
      <nav>
        <ul className="TopMenuItems">
          <MenuItem
            label="INDEX"
            onPress={() => setCurrentTab('Welcome')}
          />
          <MenuItem
            label="ABOUT ME"
            onPress={() => setCurrentTab('AboutMe')}
          />
          <MenuItem
            label="MY WORK"
            onPress={() => setCurrentTab('AboutMe')}
          />
          <MenuItem
            label="BLOG"
            onPress={() => setCurrentTab('AboutMe')}
          />
        </ul>
      </nav>
    </aside>
  );
}
