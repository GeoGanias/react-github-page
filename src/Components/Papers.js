import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const Papers = () => {

    const items = [
        {id:1, ref:'Deploy the react app to github pages:', link:'https://github.com/gitname/react-gh-pages', name:'React-Gh-Pages by Gitname'},
        {id:2, ref:'SVG Tutorials by:', link:'https://www.w3schools.com/graphics/svg_intro.asp', name:'W3Schools'},
        {id:3, ref:'Bootstrap for react by:', link:'https://react-bootstrap.netlify.app/', name:'React-Bootstrap'},
        {id:4, ref:'Help in Programming by the old time classic:', link:'https://stackoverflow.com/', name:'StackOverflow'},
        {id:5, ref:'React is used under the MIT Licence:', link:'https://github.com/facebook/react/blob/main/LICENSE', name:'MIT Licence for React'},
        {id:6, ref:'Data Visualization Entries from:', link:'https://flowingdata.com/', name:'FlowingData'}
    ]

    return(
        <div className="Papers">
          <Container style={{marginLeft:'8%', marginTop:'5%'}}>
            <Table striped bordered variant="light">
                <tbody>
                    <tr>
                    <td>References</td>
                    <td className="text-start">
                        {items.map((item) => ( 
                            <div>
                                <p><i>{item.id + ". "}{item.ref}</i><br></br>
                                <a href={item.link}>{item.name}</a></p>
                            </div>
                        ))}
                    </td>
                    </tr>
                    <tr>
                    <td>Review for Paper "???" by ? et al</td>
                    <td className="text-start">This is an honest review and opinion about ??? by ? et al in an absolutely astouuning topic. Of course im talking about the topic of ?.
                    There is little to none previous work talking about ??, which is the main point of the authors, something that really adds to this work as it is a milestone for the field of ???.
                    </td>
                    </tr>
                </tbody>
            </Table>

            </Container> 
        </div>
    );
}

export default Papers;