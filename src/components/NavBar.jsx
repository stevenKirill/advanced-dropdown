import React from 'react';

const NavBar = (props) => {
    return (
        <ul className="nav_bar_list">
            {props.children}
        </ul>
    );
};

export default NavBar
