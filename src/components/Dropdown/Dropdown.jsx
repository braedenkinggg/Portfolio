import React from 'react';
import { Link } from 'react-router-dom'
import './dropdown.scss';

function Dropdown({ children, style }) {
    return (
        <nav className='dropdown' style={ style }>
            <ul className='dropdown_menu'>
                {children}
            </ul>
        </nav>
    );
}

function DropdownItem({ children }) {
    return (
        <li className='dropdown_item'>
            {children}
        </li>
    );
}

function DropdownLink({ name, path, onClick }) {
    return (
        <Link className='dropdown_link' to={path} onClick={onClick}>{name}</Link>
    );
}

export { Dropdown, DropdownItem, DropdownLink };