import React from 'react';
import './section.scss';

const STYLES = ['section--block', 'section--grid']

function Section({ sectionStyle, children }) {
    const checkSectionStyle = STYLES.includes(sectionStyle) ? sectionStyle : STYLES[0];

    return (
        <section className={`section ${checkSectionStyle}`}>
            {children}
        </section>
    );
}

function SectionTitle({ titleText }) {
    return (
        <h2 className='section_title'>
            {titleText}
            <span className='dot'>.</span>
        </h2>
    );
}

function SectionText({ children }) {
    return <p className='section_text'>{children}</p>
}

function SectionLink({ path, linkText }) {
    return <a className='section_link' href={path}>{linkText}</a>
}

export { Section, SectionTitle, SectionText, SectionLink };