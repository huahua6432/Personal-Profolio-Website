import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description1: 'Computer Science is a booming industry, \n meaning plenty of learning resources and a lot of opportunities, which attracts many people to enter, and I am also one of them.',
        description2: 'Currently, I am a graduate student at Tufts University. During this period, I not only took the relevant school courses but also learned online about knowledge of front and back-end. I really enjoyed this process.',
        description3: 'During my internship, I continued to improve my skills and also received a lot of help and kindness from many people, This experience reinforced my desire to develop my career here.',
        highlights: {
            bullets: ["software", "intern", "keyword"],
            heading: "Here are a Few Highlights:"
        },
    }

    const renderHighLight = () => {
        return (SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className='highlight' key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        )))
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={"Why Choose Me?"} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <div>
                            <span className='about-me-description'>
                                {SCREEN_CONSTSANTS.description1}
                            </span>
                        </div>
                        <div>&nbsp;</div>
                        <div>
                            <span className='about-me-description'>
                                {SCREEN_CONSTSANTS.description2}
                            </span>
                        </div>
                        <div>&nbsp;</div>
                        <div>
                            <span className='about-me-description'>
                                {SCREEN_CONSTSANTS.description3}
                            </span>
                        </div>
                        {/* <div className='about-me-highlights'>
                            <div className='about-me-heading'>
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighLight()}
                        </div> */}
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}Contact Me{""}
                            </button>
                            <a href='Resume.pdf' download='Resume.pdf'><button className='btn highlighted-btn'>
                                Get Resume
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
