import React, { useState } from 'react'
import Typical from 'react-typical'
import axios from 'axios'
import { toast } from 'react-toastify'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import './ContactMe.css'



export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };



    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading
                subHeading={'Keep In Touch!'}
                title={'Contact Me'}
            />
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>Feel Free to Contact Me!
                    </h2>
                    {/* <a href='#'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/xiaoyan-hua-854a7b226'>
                        <i className='fa fa-linkedin-square'></i>
                    </a> */}
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <div className='cloz-icon'>
                            <i className='fa fa-phone-square'><span className='detail'>&nbsp;&nbsp;781-627-6432</span></i>
                        </div>
                        <div className='cloz-icon'>
                            <i className='fa fa-envelope-square'><span className='detail'>&nbsp;&nbsp;xiaoyanhua903@gmail.com</span></i>
                        </div>
                        <div className='cloz-icon'>
                            <a href='https://www.github.com/huahua6432' target='_blank' rel="noreferrer">
                                <i className='fa fa-github-square'><span className='detail'>&nbsp;&nbsp;www.github.com/huahua6432</span></i>
                            </a>
                        </div>
                        <div className='cloz-icon'>
                            <a href='https://www.linkedin.com/in/xiaoyan-hua' target='_blank' rel="noreferrer">
                                <i className='fa fa-linkedin-square'><span className='detail'>&nbsp;&nbsp;www.linkedin.com/in/xiaoyan-hua</span></i>
                            </a>
                        </div>
                        <div>&nbsp;</div>
                        {/* <h4>Send Your Email Here!</h4> */}
                        <img src={imgBack} alt='image not found' className='picture' />
                    </div>
                    <form action="https://formspree.io/f/xyyvkozp" method="POST" id='my_form'>
                        <p> {banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleName} value={name} name='name' required />
                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={handleEmail} value={email} name='email' required />
                        <label htmlFor='message'>Message</label>
                        <textarea type='text' onChange={handleMessage} value={message} name='message' required />
                        <div className='send-btn'>
                            <button type='submit'>
                                send <i className='fa fa-paper-plane' />
                                {/* {bool ? (<b className='load'>
                                    <img src={load1} alt='image missing' />
                                </b>) :
                                    ('')
                                } */}
                            </button>
                            {/* <button type='sumbit'>Send</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
