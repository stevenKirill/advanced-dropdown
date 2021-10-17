import React from 'react';

const DropDownItem = ({rightIcon = null, leftIcon = null, children = '' }) => {
    return (
        <a href="#" className="menu-item" onClick={() => console.log('click')}>
            <span className="icon-button">{leftIcon}</span>
                {children}
            <span className="icon-right">{rightIcon}</span>
        </a>
    );
};

export default DropDownItem
