import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
    const { label } = props;
    return (
        <li className="MenuItem">
            <a href="#MainText">
                {label}
            </a>
        </li>
    );
}

export default MenuItem;
