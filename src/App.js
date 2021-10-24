import React from 'react';
import NavBar from './components/NavBar';
import NavItem from './components/NavItem';
import DropDown from './components/DropDown';
import { faRainbow, faCamera, faUser, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const size = 'lg';
  return (
    <div className="App">
      <nav>
        <NavBar>
          <NavItem icon={faRainbow} size={size}/>
          <NavItem icon={faCamera} size={size}/>
          <NavItem icon={faUser} size={size}/>
          <NavItem icon={faArrowDown} size={size}>
            <DropDown/>
          </NavItem>
        </NavBar>
      </nav>
    </div>
  );
}

export default App;
