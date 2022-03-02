import React from "react";
import MenuItem from "./MenuItem";
import "./TopMenu.css";

export default function TopMenu() {
  return (
    <aside className="TopMenu">
      <nav>
        <ul className="TopMenuItems">
          <MenuItem
            label="Index"
          />
          <MenuItem
            label="AboutMe"
          />
        </ul>
      </nav>
    </aside>
  );
}
