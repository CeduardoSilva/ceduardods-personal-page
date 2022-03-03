import React from "react";

import "./MenuItem.css";

const MenuItem = (props) => {
    const { label, onPress } = props;
    return (
        <button onClick={onPress} className="MenuItem">{label}</button>
    );
}

export default MenuItem;
