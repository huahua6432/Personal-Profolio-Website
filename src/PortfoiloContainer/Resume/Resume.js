import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>) :
                        (<div></div>)
                    }
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>

        )
    }

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const resumeBullets = [
        { label: '\xa0\xa0\xa0Education', logoSrc: 'education.svg' },
        { label: '\xa0\xa0\xa0Work Experience', logoSrc: 'work-history.svg' },
        { label: '\xa0\xa0Related Lessons', logoSrc: 'projects.svg' },
        { label: '\xa0\xa0Programming Skills', logoSrc: 'programming-skills.svg' },
        // { label: 'Programming-skills', logoSrc: 'interests.svg' },
    ];

    const programmingSkillsDetails = [
        { skill: 'Algorithm', ratingPercentage: 85 },
        { skill: 'Cyber Security', ratingPercentage: 95 },
        { skill: 'DataBase System', ratingPercentage: 87 },
        { skill: 'Machine Learning', ratingPercentage: 90 },
        { skill: 'Software Engineering', ratingPercentage: 80 },
        { skill: 'Network', ratingPercentage: 70 },
        { skill: 'Cloud Computing' },
        { skill: 'artificial intelligence' },
        { skill: 'big Data' },
        // { skill: 'MySQL', ratingPercentage: 80 },
    ]

    const projectsDetails = [
        // {
        //     title: "Personal Portolio Website",
        //     duration: { fromDate: '2022', toDate: '2022' },
        //     description: 'A personal Protolio website to showcase all my details and projects at one place',
        //     subHeading: 'Technologies Used: React Js, Bootstrap',
        // },
        {
            title: "Travel Review Website",
            duration: { fromDate: '2021', toDate: '2021' },
            description: 'A website where people view and share travel experiences and pictures of different tourist spots',
            subHeading: 'Technologies Used:JavaScript,  CSS, HTML',
        },
        {
            title: "Job Seeking Crawler",
            duration: { fromDate: '2021', toDate: '2021' },
            description: 'Achieved crawling and parsing job recruiting information related to computer science on a recruitment website',
            subHeading: 'Technologies Used: Spring Boot, MySQL',
        },
        {
            title: "Client Chat Application",
            duration: { fromDate: '2021', toDate: '2021' },
            description: 'Designed a chat application based on the client-server model as an open-end project for lesson Network',
            subHeading: 'Technologies Used: C',
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
                heading={'Tufts Univeristy, Medford'}
                subHeading={'Master of Science in Software System Development'}
                fromDate={'2021'}
                toDate={'2023'}
            />
            <ResumeHeading
                heading={'Hohai Univeristy, China'}
                subHeading={'Master of Engineering in Electrical Engineering (part-time)'}
                fromDate={'2018'}
                toDate={'2020'}
            />
            <ResumeHeading
                heading={'North China Electric Power University, China'}
                subHeading={'Bachelor of Engineering in Electrical Engineering and Automation'}
                fromDate={'2011'}
                toDate={'2015'}
            />
            {/* <div>&nbsp;</div> */}
        </div>,

        <div className='resume-screen-container' key='work-experience'>
            <ResumeHeading
                heading={'Arista Network, Nashua, NH'}
                subHeading={'software engineer (intern)'}
                fromDate={'2022'}
                toDate={'2022'}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    &#9679; Worked in SyncE (Synchronous Ethernet) team, focused on extended quality level to support new types of SyncE clocks
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    &#9679; Built extended parser to validate and parse ESMC packet with extended quality level
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    &#9679; Implemented all extended attributes displayed in CLI show commands
                </span>
            </div>
            <br />
            <ResumeHeading
                heading={'State Grid, China'}
                subHeading={'Electrical Engineer (full-time)'}
                fromDate={'2015'}
                toDate={'2022'}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    &#9679; Developed an Electricity Device Abnormality  Detection Algorithm reducing the on-site workload of power line inspectors
                </span>
            </div>
            {/* <div className='experience-description'>
                <span className='resume-description-text'>
                    &#9679; Detected 121 abnormal devices with 97% accuracy from online  data
                </span>
            </div> */}
            <br />
        </div>,

        <div className='resume-screen-container programming-skills-container' key='programming skills'>
            {programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{ width: skill.ratingPercentage + '%' }} className='active-percentage-bar'></div>
                    </div>
                </div>
            ))}
        </div>,

        // <div className='resume-screen-container' key='projects'>
        //     {projectsDetails.map((projectsDetails, index) => (
        //         <ResumeHeading
        //             key={index}
        //             heading={projectsDetails.title}
        //             subHeading={projectsDetails.subHeading}
        //             description={projectsDetails.description}
        //             fromDate={projectsDetails.duration.fromDate}
        //             toDate={projectsDetails.duration.toDate}
        //         />
        //     ))}
        // </div>,

        <div className='resume-screen-container' key='interests'>
            <ResumeHeading
                heading='Programming Language'
                description='Java, C/C++, Python, JavaScript, Go, CSS, HTML, SQL, Matlab, Swift'
            />
            <ResumeHeading
                heading='Framework'
                description='Node.js, Express, React, Redux, Spring Boot, Spring MVC, Gin, etc'
            />
            <ResumeHeading
                heading='Develop Tools'
                description='Git, Docker, MySQL, MongoDB, AWS, Vim, Maven, Postman, Wireshark, etc'
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' }
        }
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'}
                key={index}
            >
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='oops... no internet connection'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style} className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    };

    return (
        <div className='resume-container screen-container' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'>
                            </div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}
