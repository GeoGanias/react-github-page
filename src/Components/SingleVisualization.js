import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleVisualization = ({arg, handlerBack}) => {
    const item = arg;
    console.log(item);

    return ( 
        <div className='SingleVisualization'>
            <Container>           
            {item?.map((i) => (
                <Card key={i.id} className='Card' style={{ display:'inline-block', width: '42rem',height: '32rem', marginTop: '2rem', marginLeft:"1rem", marginRight:"2rem", backgroundColor: 'DarkCyan' }}>
                <Card.Img variant="top" src={i.image} style={{objectFit: 'contain', width: '100%', height: '50%', backgroundColor: 'CadetBlue'}} />
                <Card.Body className="d-flex flex-column" style={{height:'50%'}}>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text>
                    {i.description}
                    </Card.Text>
                    <Card.Text>
                    {i.comments}
                    </Card.Text>
                    <Button onClick={() => handlerBack(i.id)} variant="primary mt-auto" style={{backgroundColor:"#003d7a"}}>Go Back</Button>
                </Card.Body>

                    <text className='text-start'>
                    <p>See more: <a href={i.link}>{i.title}</a></p>
                    
                    </text>
                </Card>
            ))}
            </Container>
        </div>
    );
}

export default SingleVisualization;