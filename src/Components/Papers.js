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
                    <td>Review for Paper "Perception! Immersion! Empowerment! Superpowers as Inspiration for Visualization" by Wesley Willett et al</td>
                    <td className="text-start">
                        <li>The paper introduces a framework that draws parallels between fictional superpowers and real-world visualization and epistemic tools. This has never done before and is a work that will probably help researchers come up with new visualization systems, tools, ideas and sensory augmentation projects, which may turn out to be helpful for mankind.
                        </li>
                        <li>It is very interesting that many fields, Data Visualization included, take inspiration from science fiction to make a breakthrough or create something new. It can be explained though, as fiction existed in our lives long before we had the technology to actually simulate ideas, similar to superpowers. 
                        </li>
                        <li>The fact that they used comic fonts for the figures' captions is very funny to me. However the paper could benefit from figures depicting the real world analogy of some of these superpowers, either from VR applications or even desktop applications or games.
                        </li>
                        <li>Τhe paper could explore the potential risks and ethical considerations of designing visualization systems based on fictional superpowers. There is a number of these superpowers that use personal data of people around. Where is the line? When should we consider weather the superpowers are ethical?
                        </li>
                    </td>
                    </tr>
                </tbody>
            </Table>

            </Container> 
        </div>
    );
}

export default Papers;