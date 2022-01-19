import React from 'react';
import { Hero, HeroTitle } from '../components/Hero/Hero';
import { Section, SectionTitle, SectionText, SectionLink } from '../components/Section/Section';
import Resume from '../assets/resume.pdf';

function Contact() {
    return (
        <>
            <Hero>
                <HeroTitle titleText='Let&apos;s Create Something Amazing' />
            </Hero>

            <Section sectionStyle='section--block'>
                <SectionTitle titleText='Contact Me' />

                <SectionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </SectionText>

                <SectionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </SectionText>

                <SectionText>
                    Feel free to contact me through any of the platforms below
                </SectionText>

                <SectionLink path='mailto:braedenking16@outlook.com' linkText='braedenking16@outlook.com' />
                <SectionLink path='https://github.com/braedenkinggg' linkText='GitHub' />
                <SectionLink path='https://www.instagram.com/braedenking_' linkText='Instagram' />
                <SectionLink path='http://www.twitter.com/braedenk1ng' linkText='Twitter' />
                <SectionLink path='https://www.linkedin.com/in/braeden-king-37bbb5210' linkText='LinkedIn' />
                <SectionLink path={Resume} download linkText='Resume (pdf 83.5kb)' />
            </Section>
        </>
    );
}

export default Contact;