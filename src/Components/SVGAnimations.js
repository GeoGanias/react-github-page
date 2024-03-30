import Raindrop from "./Raindrop";
import { useState } from 'react';

const SVGAnimations = () => {
    const raindrops = [];
    let xStart = 200;
    const [message, setMessage] = useState("Click on the shapes to help them make it to the sun!");


    for(let i=0; i < 30 ; i++){
        const xOffset = Math.random() * 30 + 15; // Random x offset between 15 and 30
        const fromRand = Math.random() * 20 + 10; // Random delay between 10 and 20 seconds
        const durationRand = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds
        raindrops.push (<Raindrop key={i} x={xStart+xOffset} from={-fromRand} duration={durationRand}/>);
        xStart = xStart + xOffset;
    }

    const [positions, setPosition] = useState([{pos:'left'},{pos:'left'},{pos:'left'}]);
    
    const togglePosition = (index) => {
        console.log("toggle: -> "+index);
        const newPositions = [...positions];
        if(newPositions[index].pos === 'left') {
            newPositions[index].pos = 'right'
        }
        else{
            newPositions[index].pos = 'left'
        }
        console.log(newPositions)
        setPosition(newPositions);
        let goal = true;
        for(let i=0; i<newPositions.length; i++){
            if(newPositions[i].pos === 'left'){
                goal = false;
                break;
            }
        }
        if(goal){
            setMessage("Hooray you did it!");
        }
        else{
            setMessage("Click on the shapes to help them make it to the sun!");
        }

      };

    return ( 

        <div className='SVGAnimations'>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh', width: "100%"}}>

            <text className="Test" x="30%" y="300" textAnchor="middle" fill="white" fontSize={20} >
                {message}
            </text>
            <g>
                <polygon points="1100,-20 1000,800 1200,800" style={{fill:'orange'}} />
                <polygon points="1100,-20 1200,800 1400,800" style={{fill:'gold'}} />
                <polygon points="1100,-20 1400,800 1600,800" style={{fill:'orange'}} />
            </g>
            <g>
                {raindrops}
            </g>
            <g
                className="circle"
                style={{transition: 'transform 0.5s ease-in-out', cursor: 'pointer'}}   
                transform={positions[0].pos === 'left' ? 'translate(10, 50)' : 'translate(1080, 50)'}
                onClick={() => togglePosition(0)}>
                <circle cx="60" cy="140" r="30" fill="lime" />
            </g>
            <g
                className="rectangle"
                style={{transition: 'transform 0.5s ease-in-out', cursor: 'pointer'}}   
                transform={positions[1].pos === 'left' ? 'translate(10, 50)' : 'translate(1110, 50)'}
                onClick={() => togglePosition(1)}>
                <rect x="30" y="210" height="60" width="60" style={{stroke:'green', fill:'red'}}>
                    <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="10s"
                    type="rotate"
                    from="0 60 235"
                    to="360 60 235"
                    repeatCount="indefinite" />
                </rect>
            </g>
            <g
                className="circle"
                style={{transition: 'transform 0.5s ease-in-out', cursor: 'pointer'}}   
                transform={positions[2].pos === 'left' ? 'translate(10, 50)' : 'translate(1130, 50)'}
                onClick={() => togglePosition(2)}>
                <circle cx="60" cy="350" r="30" fill="blue" />
            </g>

        
            </svg> 
        </div>
    );
}

export default SVGAnimations;