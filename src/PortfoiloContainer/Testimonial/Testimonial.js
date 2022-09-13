import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Testimonial.css'
import shape from '../../assets/Testimonial/shape-bg.png';

export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>", "&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-right'></i>"],
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    }

    return (
        <div id={props.id || ''} className='project'><ScreenHeading
            title={'Projects'}
            subHeading={'What I Have Done'}
        />
            <section className='testimonial-section' >
                <div className='container'>
                    <div className='row'>
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel'{...options}>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='client-info'>
                                        < a href='https://github.com/huahua6432/simplebank' target='_blank' rel="noreferrer">
                                            <h5>Simple Bank</h5>
                                        </a>
                                        <p>Keywords: Golang, Postgres, Docker, AWS</p>

                                    </div>
                                    <div className='testi-comment'>
                                        <p>
                                            Established a backend web service of a mimic bank providing service of creating, managing accounts and transferring money
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='client-info'>
                                        < a href='https://github.com/huahua6432/Dev-Connector' target='_blank' rel="noreferrer">
                                            <h5>Developer Connector</h5>
                                        </a>
                                        <p>Keywords: JavaScript, Node.js, Express, MongoDB, React</p>

                                    </div>
                                    <div className='testi-comment'>
                                        <p>
                                            Developed a small full stack social network app for software developers that includes authentication, profiles and forum posts
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='client-info'>
                                        < a href='https://github.com/huahua6432/Personal-Profolio-Website' target='_blank' rel="noreferrer">
                                            <h5>Personal Protfolio Website</h5>
                                        </a>
                                        <p>Keywords: JavaScript, CSS, React</p>
                                    </div>
                                    <div className='testi-comment'>
                                        <p>
                                            Built a responsive personal Protfolio Website to showcase all my details and projects at one place with Email functionality
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='client-info'>
                                        < a href='https://github.com/huahua6432/Java-on-Rails' target='_blank' rel="noreferrer">
                                            <h5>Java on Rails</h5>
                                        </a>
                                        <p>Keywords: Java, MVC, I/O, reflection</p>
                                    </div>
                                    <div className='testi-comment'>
                                        <p>
                                            Implemented a simple web server that uses a model-view-controller architecture in Java and provided primitive database CRUD interface
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='client-info'>
                                        < a href='https://github.com/huahua6432/Stock-Price-Prediction' target='_blank' rel="noreferrer">
                                            <h5>Stock Price Prediction</h5>
                                        </a>
                                        <p>Keywords: ML, Python, LSTM</p>
                                    </div>
                                    <div className='testi-comment'>
                                        <p>
                                            Utilized LSTM model to predict stock prices with historical  prices and trading volume, and visualize and compare both the predicted price values over time
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='client-info'>
                                        < a href='https://github.com/huahua6432/CTF-game' target='_blank' rel="noreferrer">
                                            <h5>Capture The Flag</h5>
                                        </a>
                                        <p>Keywords: SQL injection, Cross-site Scripting, Validation</p>
                                    </div>
                                    <div className='testi-comment'>
                                        <p>
                                            Found and took advantage of a number of vulnerabilities on a live web application designed by the Cyber Security professor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                </div>
            </section>

            <div className='footer-image'>
                <img src={shape} alt='photo not responding' />
            </div>
        </div>
    )
}
