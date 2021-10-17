import React from 'react';
import NavBar from './components/NavBar';
import NavItem from './components/NavItem';
import DropDown from './components/DropDown';
import { faCoffee, faSdCard, faRadiation, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function App() {
  const size = 'lg';
  return (
    <div className="App">
      <nav>
        <NavBar>
          <NavItem icon={faCoffee} size={size}/>
          <NavItem icon={faSdCard} size={size}/>
          <NavItem icon={faRadiation} size={size}/>
          <NavItem icon={faArrowDown} size={size}>
            <DropDown/>
          </NavItem>
        </NavBar>
      </nav>
    </div>
  );
}

export default App;
