import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Bio.css'
import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import aboutMePic from './assets/aboutme_pic.jpg'

export default function Bio() {
    return (
        <>
        
            <div className='bio' id='bio'>
                <h3 id='subheader' className='my-5'><i class="bi bi-person-fill"></i> About Me</h3>
                <p id='bioInfo'>
                I am a full-time Software Engineering student at McMaster University. I have a passion for full-stack development, creating projects focused on front-end and/or back-end technologies.
                <br />
                <br />
                Beyond coding, I enjoy creating digital art and experimenting with game development engines.
                <br />
                <br />
                I’m always eager to learn new skills and push my creative boundaries.
                </p>
                <div className="skillsContainer">
                    <div className="skillContainer">
                        <h5 className='bioHeader'>Languages:</h5>
                        <div className="languages">
                            <span className="language">JavaScript</span>
                            <span className="language">Java</span>
                            <span className="language">Python</span>
                            <span className="language">Lua</span>
                            <span className="language">C#</span>
                            <span className="language">C</span>
                            <span className="language">Verilog</span>
                        </div>
                        <h5 className='bioHeader'>Technologies:</h5>
                        <div className="technologies">
                            <span className="technology">Node.js</span>
                            <span className="technology">Express.js</span>
                            <span className="technology">Embedded JavaScript (EJS)</span>
                            <span className="technology">Mongoose</span>
                            <span className="technology">MongoDB</span>
                            <span className="technology">Passport.js</span>
                            <span className="technology">Bootstrap</span>
                            <span className="technology">Bulma</span>
                            <span className="technology">Git</span>
                            <span className="technology">Maven</span>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </>
                    
    )
}