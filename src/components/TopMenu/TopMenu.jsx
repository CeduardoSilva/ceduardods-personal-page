import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./TopMenu.css";

export default function TopMenu() {
  return (
    <aside className="TopMenu">
      <nav>
        <ul className="TopMenuItems">
          <MenuItem
            label="INDEX"
          />
          <MenuItem
            label="ABOUT ME"
          />
          <MenuItem
            label="MY WORK"
          />
          <MenuItem
            label="BLOG"
          />
        </ul>
      </nav>
    </aside>
  );
}
