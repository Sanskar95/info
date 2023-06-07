import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>About Me</h2>
                    {/*<p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>*/}
                    <p style={{color:theme.tertiary80}}>
                      <p style={{color:theme.tertiary80}}> <li> Holds a Master's degree in computer science from KTH Royal Institute of Technology Stockholm, Sweden and Technical University of Munich, Germany. </li> </p>
                      <p style={{color:theme.tertiary80}}> <li> Have four years of professional experience in software development with one year in the field of data mining and three years in full stack web development.</li> </p>
                    </p>
                    <br/>
                    <p  style={{color:theme.tertiary80}}>  Apart from writing code I like </p>
                {/*</p>*/}
                    <p  style={{color:theme.tertiary80}}>
                       <li>Playing Guitar </li>
                    </p>
                    <p  style={{color:theme.tertiary80}}>
                       <li>
                           Badminton
                       </li>
                    </p>
                    <p  style={{color:theme.tertiary80}}>
                       <li>Hiking </li>
                    </p>
                <ul>



                </ul>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
