import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavbarComponent = () => {

    return (
        <div className="NavbarComponent">
            <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                    <Navbar.Brand as={Link} to={"/"} href="#home">GeoGanias</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link> 
                    <Nav.Link as={Link} to={"/SVG"} >SVG Animations</Nav.Link>
                    <Nav.Link as={Link} to={"/Visualizations"} >Visualizations</Nav.Link>
                    <Nav.Link as={Link} to={"/Papers"} >Papers & Refs</Nav.Link>
                    <Nav.Link as={Link} to={"/About"} >About</Nav.Link>
                    </Nav>
            </Container>
            </Navbar>
        </div>
    );
  }
  
  export default NavbarComponent;