const Raindrop = ({key,x,from,duration}) => {
    return (
            <line key={key} x1={x} y1="0" x2={x} y2="20" stroke="#0000ff">
            <animate
                attributeName="y1"
                attributeType="XML"
                from={from}
                to="600"
                dur={duration}
                repeatCount="indefinite"
            />
            <animate
                attributeName="y2"
                attributeType="XML"
                from={from+20}
                to="620"
                dur={duration}
                repeatCount="indefinite"
            />
            </line>
    );
}

export default Raindrop;