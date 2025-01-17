import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarFile.css'

function NavbarFile() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar" data-bs-theme="dark" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#home">Danyal Yousuf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='smooth' href="#bio">About Me</Nav.Link>
            <Nav.Link className='smooth' href="#exp">Experience</Nav.Link>
            <Nav.Link className='smooth' href="#proj">Projects</Nav.Link>
            <Nav.Link className='smooth' href="#contact">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFile;