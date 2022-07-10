import React from "react";
import { TimelineElement } from "../components";
import { Timeline } from "@mui/lab"
import Information from "./Information.json"
import { Typography } from "@mui/material";

const Data = Information.Timeline

interface Props {}

interface State {
    matches: boolean
}

class TimelinePage extends React.Component<Props, State> {
    props: Props
    constructor(props: Props){

        super(props)
        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches
        }

    }

    componentDidMount() {
        window.matchMedia("(min-width: 768px)").addEventListener('change', event => {
            this.setState({matches: event.matches})
        })
    }


    render () {
        return (
            <div id="Timeline">
                <Typography variant="h4" id="Title">Life cycle of Stars Timeline</Typography>
                <Timeline position={this.state.matches ? "alternate": "right"}>
                    {
                        Data.map((item, index) => (
                        <TimelineElement 
                            image={item.image} 
                            title={item.title} 
                            description={item.description}
                            last={(Data.length - 1) === index}
                            index={item.index}
                        />))
                    }
                </Timeline>
            </div>
        )
    }
}

export default TimelinePage;