import './Title.css'

import profile from './assets/icon.jpg'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function Title() {
    const pdf = () => {
        window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank');
    }

    return (
        <div className='container2'>
            <Image src={profile} className="TitleImg mb-5" id='xs' roundedCircle fluid></Image>
            <h3 className='display-6'>Danyal Yousuf</h3>
            <h5>Software Developer</h5>
            <h6><i class="bi bi-geo-alt-fill"></i> Milton, Ontario</h6>
            <button onClick={pdf} className="btn resumeBtn my-3"><strong><i class="bi bi-file-earmark-text-fill"></i> View Resume</strong></button>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/danyal-yousuf-4599a2215/" target='_blank'><i class="bi bi-linkedin mx-1 buttonIcon"></i></a>
                <a href="https://github.com/DYousuf05" target='_blank'><i class="bi bi-github mx-1 buttonIcon"></i></a>
                <a href="mailto:danyalyousuf05@gmail.com" target='_blank'><i class="bi bi-envelope-fill buttonIcon"></i></a>
            </div>
            <div className="pageContents">
                <a className='pageContent' href="#bio">About</a>
                <a className='pageContent' href="#projects">Projects</a>
                <a className='pageContent' href="#experience">Experience</a>
            </div>
            <footer>Developed using Vite + React + React Bootstrap</footer>
        </div>      
    )
}