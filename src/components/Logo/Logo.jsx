import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

const SIZES = ['logo--sm', 'logo--md', 'logo--lg'];

function Logo({ logoSize, onClick }) {
    const checkLogoSize = SIZES.includes(logoSize) ? logoSize : SIZES[1];

    return (
        <Link to='/' className={`logo ${checkLogoSize}`} onClick={onClick}>
            BK
            <span className='dot'>.</span>
        </Link>
    );
};

export default Logo;