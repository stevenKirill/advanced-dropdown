import React from 'react';
import DropDownItem from './DropDownItem';
import { CSSTransition } from 'react-transition-group';

const DropDown = () => {
    return (
        <div className="dropdown">
            <CSSTransition>
                <div className="menu">
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Other</DropDownItem>
                </div>
            </CSSTransition>
            {/* <CSSTransition>
                <div className="settings">
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Other</DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition>
                <div className="animals">
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Other</DropDownItem>
                </div>
            </CSSTransition> */}
        </div>
    );
};

export default DropDown
