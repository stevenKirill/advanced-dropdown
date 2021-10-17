import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ icon, size, children }) => {
    const [opened, setOpened] = useState(false);
    return (
        <li className="nav_item">
            <a href="#" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon icon={icon} size={size} className="nav_item_icon"/>
            </a>
            {opened && children}
        </li>
    );
};

export default NavItem
