import React from 'react';
import './card.scss';

function Card({ children }) {
    return (
        <div className='card'>
            { children }
        </div>
    );
}

function CardImage({ image }) {
    return (
        <div className='card_image'>
            <img src={image} alt={`card ${image}`} />
        </div>
    );
}

function CardName({ name }) {
    return <h1 className='card_name'>{name}</h1>
}

export { Card, CardImage, CardName };