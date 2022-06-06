import React from "react";

import "./MenuItem.css";

const MenuItem = (props) => {
    const { label, onPress } = props;
    return (
        <div className="MenuItem">
            <div className="MenuItemSquare"></div>
            <button onClick={onPress}>{label}</button>
        </div>
    );
}

export default MenuItem;
