import React from 'react'
import Typical from "react-typical"
import ScrollService from '../../../utilities/ScrollService'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-detail'>
                    <div className='profile-details-name'>
                        <div >&nbsp;</div>
                        <span className='primary-text'>
                            {" "}

                            Hello, I'm <span className='highlighted'>Xiaoyan Hua
                            </span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}<h1>
                                {" "}
                                <Typical loop={Infinity} steps={[
                                    "A Graduate Student", 2000, "Major in Software System Dev", 3000, "Studying in Tufts University", 3000]} />
                            </h1>
                            <span className='profile-role-tagline'>looking for full-time software Engineer job in 2023</span>
                        </span>
                    </div>
                    <div className='cloz'>
                        <div className='cloz-icon'>
                            <a href='https://www.github.com/huahua6432' target='_blank' rel="noreferrer">
                                <i className='fa fa-github-square'><span className='detail'> www.github.com/huahua6432</span></i>
                            </a>
                        </div>
                        <div className='cloz-icon'>
                            <a href='https://www.linkedin.com/in/xiaoyan-hua' target='_blank' rel="noreferrer">
                                <i className='fa fa-linkedin-square'><span className='detail'> www.linkedin.com/in/xiaoyan-hua</span></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-options'>
                        <div >&nbsp;</div>
                        <button className='btn primary-btn'
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}Contact me{" "}
                        </button>
                        <a href='Resume_XiaoyanHua.pdf' download='Resume_XiaoyanHua.pdf'><button className='btn highlighted-btn'>
                            Get Resume
                        </button></a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
