import React from "react";

import "./MenuItem.css";

const MenuItem = (props) => {
    const { label, onPress } = props;
    return (
        <div className="MenuItemContainer"  onClick={onPress}>
            <div className="MenuItemSquare"></div>
            {label}
        </div>
    );
}

export default MenuItem;
