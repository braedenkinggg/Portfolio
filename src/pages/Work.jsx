import React from 'react';
import { Hero, HeroTitle } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Card, CardImage, CardName } from '../components/Card/Card';

function Work() {
    return (
        <>
            <Hero>
                <HeroTitle titleText="Check Out Some Of My Work" />
            </Hero>

            <Section sectionStyle='section--grid'>
                <Card>
                    <CardImage image='https://bepatrickdavid.com/assets/img/be-userbot.jpg'/>
                    <CardName>Project 1</CardName>
                </Card>

                <Card>
                    <CardImage image='https://bepatrickdavid.com/assets/img/be-paolo.jpg'/>
                    <CardName>Project 2</CardName>
                </Card>
            </Section>
        </>
    );
}

export default Work;