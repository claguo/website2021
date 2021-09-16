import React from 'react';
import { Link } from 'react-router-dom';

import asteriskicon from './pics/SVG/asterick.svg';


function Header() {
    return (
            <Link to='/' className='hoveropacity' style={{textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'fixed', margin: '1.5vw', zIndex: '99'}}>
                <img src={asteriskicon} alt='asterisk icon' style={{height: '3vw', margin: '1vw'}} />
                <div className='header'>home</div>
            </Link>
    )
}

export default Header

