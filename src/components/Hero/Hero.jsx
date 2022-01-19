import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

function Hero({ children }) {
    return (
        <section className='hero'>
            <div className='hero_inner'>
                { children }
            </div>
        </section>
    );
}

function HeroTitle({ titleText }) {
    return (
        <h1 className='hero_title'>
            {titleText}
            <span className='dot'>.</span>
        </h1>
    );
}

function HeroEyebrow({ children }) {
    return (
        <h2 className='hero_eyebrow'>{children}</h2>
    );
}

function HeroSubtitle({ subtitleText }) {
    return <h3 className='hero_subtitle'>{subtitleText}</h3>
}

function HeroLink({ linkText, path }) {
    return <Link className='hero_link' to={path}>{linkText}</Link>
}

export { Hero, HeroTitle, HeroEyebrow, HeroSubtitle, HeroLink };