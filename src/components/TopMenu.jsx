import React from "react";
import "./TopMenu.css";

export default function MainPage() {
  return (
    <aside className="TopMenu">
      <nav>
        <ul className="TopMenuItems">
          <li className="MenuItem">
            <a href="#MainText">
              Index
            </a>
          </li>
          <li className="MenuItem">
            <a href="#AboutMe">
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
