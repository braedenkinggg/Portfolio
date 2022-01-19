import React from 'react';
import './hamburger.scss';

function Hamburger({ onClick }) {
    return (
        <div className='hamburger' onClick={ onClick }>
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default Hamburger;