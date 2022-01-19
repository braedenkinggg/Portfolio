import React from 'react';
import { Hero, HeroTitle, HeroEyebrow, HeroSubtitle, HeroLink } from '../components/Hero/Hero';

function PageNotFound() {
    return (
        <Hero>
            <HeroEyebrow>
                (・_・ )<span className='scratch'>ゞ</span>
            </HeroEyebrow>

            <HeroTitle titleText='404 Page Not Found' />
            <HeroSubtitle subtitleText="You seem like you're lost, this should help." />
            <HeroLink path='/' linkText='Back To Homepage' />
        </Hero>
    );
}

export default PageNotFound;