import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SingleVisualization from './SingleVisualization';

import rocks from '../Images/rocks-map.webp'
import bias from '../Images/bias-in-resume-judgement.webp'
import lifeSatisfaction from '../Images/life-satisfaction-by-age-desktop.webp'
import tinyChip from '../Images/tiny-chip-FT.webp'
import raceOccupation from '../Images/Screenshot 2024-03-31 010031.png'
import { useState } from 'react';

const Visualizations = () => {
    const handleSelection = (id)=>{
        console.log("setting up -> ", id)
        setId(id);
        console.log(idShown);
    }
    const handleBack = () => {
        console.log("goback");
        setId(0);
    }

    const [idShown, setId] = useState(0);
    const items = [
        {image: rocks, link:"https://flowingdata.com/2024/03/01/rock-map-of-scotland/", title: "Rock Map of Scotland", description: "A rock map of Scotland made in 1992.", comments:"\"My grandpa who is 85 started making this rock map of Scotland in 1992. He collected rocks during amateur geology trips over 30 years. He says it had to be geologically correct and also aesthetically pleasing\". This is a very interesting idea that gives you a hint of the terrain or the landscapes in each part of Scotland.", id: 1},
        {image: bias, link:"https://flowingdata.com/2024/03/13/racial-bias-in-openai-gpt-resume-rankings/", title: "OpenAI GPT Racial Bias", description:"Racial bias in OpenAI GPT resume rankings as the AI models used are based on certain demographics.", comments:"AI is finding its way into the HR workflow to sift through resumes. However, the models that the AI is built on lean more towards certain demographics. This is pretty interesting as AI is learning from us, but sometimes we are not good teachers.", id: 2},
        {image: lifeSatisfaction, link:"https://flowingdata.com/2022/11/10/life-satisfaction-and-age/", title: "Life Satisfaction and Age", description:"People were asked to score their life satisfaction from 0 to 10.", comments:"This is based on data from the well-being module of the American Time Use Survey. I was expecting to see a trend line similar to the above, but I didn't think it'd be so clear. I liked this chart even if it was very simple and kinda boring. But you can see that people tend to be happier when they grow old, which is pretty reassuring.", id: 3},
        {image: tinyChip, link:"https://flowingdata.com/2024/03/05/tiny-chip-manufacturing-visually-explained/", title: "Tiny chip manufacturing", description:"Microchips have gotten tiny. Like smaller than a red blood cell tiny.", comments:"This is a visualization showing exactly what we have achieved. See this little chip between the red blood cell and pollen? Exactly.", id: 4},
        {image: raceOccupation, link:"https://flowingdata.com/2024/02/16/race-and-occupation/", title: "Race and Occupation", description:"A bar chart that showed occupations simply by percentage of race and ethnicity.", comments:"About 22 percent of physicians in the United States are Asian, but Asian people only make up about 6 percent of the total working population. So you could say that Asian people are about 3.5 times more likely to be physicians. It is pretty interesting but there is some diffuculty actually understanding and seeing the whole data. Check it out on their page.", id: 5}
    ];

    return ( 
        <div className='Visualizations'>
            <Container>           
            {idShown===0 && items.map((item) => (
                <Card key={item.id} className='Card' style={{ display:'inline-block', width: '18rem',height: '24rem', marginTop: '2rem', marginLeft:"1rem", marginRight:"2rem", backgroundColor: 'DarkCyan' }}>
                <Card.Img variant="top" src={item.image} style={{objectFit: 'contain', width: '100%', height: '50%', backgroundColor: 'CadetBlue'}} />
                <Card.Body className='d-flex flex-column' style={{height:'50%'}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button onClick={() => handleSelection(item.id)} variant="primary mt-auto" style={{backgroundColor: "#003d7a"}}>See More</Button>
                </Card.Body>
                </Card>
            ))}
            {idShown!==0 && <SingleVisualization arg={items.filter((item) => (item.id === idShown))} handlerBack={handleBack}/>}
            </Container>
        </div>
    );
}
 
export default Visualizations;