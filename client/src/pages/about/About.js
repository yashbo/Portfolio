import React from 'react'
import './About.css'
import imgpath from '../../assets/images/IMG20240617182136.jpg'
const About = () => {
  return (
    <>
    <jump>
       <div className='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src={imgpath} alt="profile-pic"/>
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About me</h1>
                    <p>
                        With a B.Tech in Chemical 
                        Engineering and Technology 
                        from IIT BHU, I've cultivated 
                        a strong analytical mindset 
                        and a solid foundation in 
                        technology. My journey into 
                        web development began as a 
                        passion project, where I delved 
                        into programming languages and 
                        frameworks. Through practical 
                        projects and self-learning, I've 
                        mastered front-end and back-end 
                        development, UI/UX design, and 
                        database management. I'm eager 
                        to leverage these skills to 
                        create impactful and user-centric 
                        web solutions.
                    </p>
                </div>
            </div>
        </div> 
        </jump>
    </>
  );
};

export default About;