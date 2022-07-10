import React from "react";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from "@mui/lab"

import {
    Card,
    CardMedia,
    CardContent,
    Typography
} from "@mui/material"

interface TimelineElementData {
    title: string,
    image: string,
    description: string,
    last: boolean,
    index: string
}

interface State {
    opacity: number
}

class TimelineElement extends React.Component<TimelineElementData, State> {
    props: TimelineElementData
    state: State

    constructor(props: TimelineElementData) 
    {
        super(props)
        this.props = props
        this.state = { opacity: 0.0 } 
    }

    onMouseOver = () => {
        this.setState({ opacity: 1.0 })
    }

    onMouseLeave = () => {
        this.setState({ opacity: 0.0 })
    }

    render() {
        return (
            <TimelineItem className="TimelineItem">
                <TimelineSeparator>
                    <TimelineDot className="Dot TimelineBody">
                        <Typography variant="h6">{this.props.index}</Typography>
                    </TimelineDot>
                    {this.props.last ? null: <TimelineConnector  className="Line TimelineBody"/>}
                </TimelineSeparator>
                <TimelineContent className="Content" >

                    <Card className="Card Media" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                        <CardMedia 
                            component="img"
                            image={this.props.image}
                            alt={this.props.title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div"> { this.props.title } </Typography>
                        </CardContent>
                    </Card>

                    <Card className="Card Info" sx={ { opacity: this.state.opacity } }>
                        <CardContent>
                            <Typography variant="h5" gutterBottom >{this.props.title}</Typography>
                            <Typography variant="body1" >{this.props.description}</Typography>
                        </CardContent>
                    </Card>

                </TimelineContent>
            </TimelineItem>
        )
    }
}

export default TimelineElement;