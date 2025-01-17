import './Projects.css'
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

export default function Projects() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);


    return (
        <>
        <div id='projects'>
        <h2 id="subheader" className="my-5"><i class="bi bi-pc-display"></i> Projects</h2>
            <div className='project' id='projects'>
                <Image src='restnreview.png' onClick={handleShow1} className="projectImg"></Image>
                <div className="projectInfo">
                    <h4 className='projectHeader'>RestNReview</h4>
                    <div className='skills'>
                        <span className="skill">Express.js</span>
                        <span className="skill">MongoDB</span>
                        <span className="skill">Mongoose</span>
                        <span className="skill">Passport.js</span>
                        <span className="skill">EJS</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">Render</span>
                    </div>
                    <div className='projectDesc'>
                        -Integrated CRUD-formatted HTTP routes to create, update, delete, review, and favourite hotel listings
                    </div>
                    <div className='projectDesc'>
                        -Designed and implemented a user authentication and authorization system via Passport.js
                    </div>
                    <div className='projectDesc'>
                        -Used MongoDB to store and managed various unstructured schemas 
                    </div>
                    <a href='https://github.com/DYousuf05/RestNReview' target='_blank' className='btn repoBtn'><i class="bi bi-box-arrow-up-right"></i> View Repository</a>
                </div>
                <Modal show={show1} onHide={handleClose1} centered size="xl">
                    <Modal.Body className='modalBody'>
                        <Image src='restnreview.png' data-toggle="modal" className="modalImg"></Image>
                    </Modal.Body>
                    <Modal.Footer className='modalFooter'>
                        <span >RestNReview Home Page</span>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='project'>
                <Image src='streetball.png' onClick={handleShow2} className="projectImg"></Image>
                <div className="projectInfo">
                    <h4 className='projectHeader'>Streetball Scorekeeper</h4>
                    <div className='skills'>
                        <span className="skill">JavaScript</span>
                        <span className="skill">HTML</span>
                        <span className="skill">Bulma</span>
                        <span className="skill">GitHub Pages</span>
                    </div>
                    <div className='projectDesc'>
                        -Developed a dynamic front-end application using JavaScript to keep track of game scores
                    </div>
                    <div className='projectDesc'>
                        -Implemented the Bulma CSS framework for size responsiveness
                    </div>
                    <div className='projectDesc'>
                        -Deployed application using GitHub Pages for easy access
                    </div>
                    <div className="links">
                        <a href='https://github.com/DYousuf05/streetball_scorekeeper' target='_blank' className='btn repoBtn'><i class="bi bi-box-arrow-up-right"></i> View Repository</a>
                        <a href='https://streetballscorekeeper.org/' target='_blank' className='btn repoBtn'><i class="bi bi-globe"></i> Live Website</a>
                    </div>
                    
                </div>
                <Modal show={show2} onHide={handleClose2} centered size="xl">
                    <Modal.Body className='modalBody'>
                        <Image src='streetball.png' data-toggle="modal" className="modalImg"></Image>
                    </Modal.Body>
                    <Modal.Footer className='modalFooter'>
                        <span >Streetball Scorekeeper Main Page</span>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='project'>
                <Image src='quanser.png' onClick={handleShow3} className="projectImg"></Image>
                <div className="projectInfo">
                    <h4 className='projectHeader'>Quanser QArm Automation</h4>
                    <div className='skills'>
                        <span className="skill">Python</span>
                        <span className="skill">Quanser</span>
                        <span className="skill">QLabs</span>
                    </div>
                    <div className='projectDesc'>
                        -Wrote a Python program in the IDLE 3.8 environment to control a Quanser QArm in picking up sterilizing containers and placing them into designated autoclaves
                    </div>
                    <div className='projectDesc'>
                        -Rendered a simulation of the program through the QLabs Environment
                    </div>
        
                    
                </div>
                <Modal show={show3} onHide={handleClose3} centered size="l">
                    <Modal.Body className='modalBody'>
                        <Image src='quanser.png' data-toggle="modal" className="modalImg"></Image>
                    </Modal.Body>
                    <Modal.Footer className='modalFooter'>
                        <span >QLab Simulation of QArm</span>
                    </Modal.Footer>
                </Modal>
            </div>
            
        </div>
        
        </>
        
    )
    
}