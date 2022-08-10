import React from "react";
import {Grid, Segment, Placeholder} from 'semantic-ui-react'

const Loadding: React.FC <{numbeOfCards?:number}> = ({numbeOfCards = 3})=>{
    const arr = new Array (numbeOfCards). fill({})
    return(
        <>
        {arr.map((_,index)=>(
            <Grid.Column key={index+1*9} mobile={16} tablet={8} computer={5}>
             <Segment raised>
                <Placeholder>
                    <Placeholder.Image rectangular/>
                    <Placeholder.Header>
                        <Placeholder.Line/>
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    </Placeholder.Paragraph>
                </Placeholder>
             </Segment>
            </Grid.Column>
        ))}
        </>
    )
}
export default Loadding