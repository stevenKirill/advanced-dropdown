import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const DropDown = () => {
    const [activeMenu,setActiveMenu] = useState('main');
    const ref = useRef(null);

    /** Элемент списка. */
    const DropDownItem = ({ leftIcon, rightIcon, menuState, children }) => {
        return (
            <a href="#" className="menu-item" onClick={() => menuState && setActiveMenu(menuState)}>
                <span className="icon-button">{leftIcon}</span>
                    {children}
                <span className="icon-right">{rightIcon}</span>
            </a>
        );
    };

    return (
        <div className="dropdown" ref={ref}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                unmountOnExit
                classNames="menu-primary"
            >
                <div className="menu">
                    <DropDownItem menuState="technologies">
                        Tech
                    </DropDownItem>
                    <DropDownItem menuState="fruits">
                        Fruits
                    </DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'technologies'}
                timeout={500}
                unmountOnExit
                classNames="menu-secondary"
            >
                <div className="technologies">
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon  icon={faArrowLeft}/>}
                        menuState="main"
                    >
                        Back to main
                    </DropDownItem>
                    <DropDownItem leftIcon="❤️">HTML</DropDownItem>
                    <DropDownItem leftIcon="❤️">CSS</DropDownItem>
                    <DropDownItem leftIcon="❤️">JavaScript</DropDownItem>
                    <DropDownItem leftIcon="❤️">React</DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'fruits'}
                timeout={500}
                unmountOnExit
                classNames="menu-secondary"
            >
                <div className="fruits">
                <DropDownItem
                    leftIcon={<FontAwesomeIcon  icon={faArrowLeft}/>}
                    menuState="main"
                >
                        Back to main
                    </DropDownItem>
                    <DropDownItem leftIcon="🍍">Pineapple</DropDownItem>
                    <DropDownItem leftIcon="🍌">Banana</DropDownItem>
                    <DropDownItem leftIcon="🍑">Peach</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropDown
