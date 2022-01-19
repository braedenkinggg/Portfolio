import React from 'react';
import { Hero, HeroTitle, HeroEyebrow, HeroSubtitle } from '../components/Hero/Hero';

function Home() {
    return (
        <>
            <Hero>
                <HeroEyebrow>
                    Hi There! <span className='wave'>👋</span>
                </HeroEyebrow>

                <HeroTitle titleText='I&apos;m Braeden' />
                <HeroSubtitle subtitleText='Full-Stack Web Developer' />
            </Hero>
        </>
    );
}

export default Home;