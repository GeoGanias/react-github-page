import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import me from '../Images/Giorgos_Ganias.jpg'

const About = () => {

    return (
        <div className='SingleVisualization'>
            <Container>           
                <Card className='Card' style={{ display:'inline-block', width: '24rem',height: '24rem', marginTop: '2rem', marginLeft:"1rem", marginRight:"2rem", backgroundColor: 'DarkCyan' }}>
                <Card.Img variant="top" src={me} style={{objectFit: 'contain', width: '100%', height: '60%', backgroundColor: 'CadetBlue'}} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Giorgos Ganias</Card.Title>
                    <Card.Text>
                    I'm a Software Developer & Researcher currently working for Narralive research team and also pursuing my master's degree in Computer Science.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </Container>
        </div>

    );
}

export default About;