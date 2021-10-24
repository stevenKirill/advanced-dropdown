import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ icon, size, children }) => {
    const [opened, setOpened] = useState(false);
    const liRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (liRef.current && !liRef.current.contains(event.target)) {
                setOpened(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => document.removeEventListener('click', handleClickOutside, true);
    },[]);

    return (
        <li className="nav_item" ref={liRef}>
            <a href="#" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon icon={icon} size={size} className="nav_item_icon"/>
            </a>
            {opened && children}
        </li>
    );
};

export default NavItem
