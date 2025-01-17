import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Title from './Title'
import Bio from './Bio'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import NavbarFile from './NavbarFile'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <Container fluid>
      <Row className='layout'>
        <Col className='title'>
          <Title/>
        </Col>
        <Col>
          <Bio/>
          <Projects/>
          <Experiences/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
