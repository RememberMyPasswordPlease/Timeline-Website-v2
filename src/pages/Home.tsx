import React from "react";
import Information from "./Information.json"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { 
    Button, 
    Card, 
    CardContent, 
    CardMedia,
    Typography
} from "@mui/material"
import {Link} from "react-router-dom"

interface Data {
    title: string,
    description: string,
    img: string,
    caption: string 
}

interface SectionProps {
    id: string,
    data: Data
}

interface HomeProps {}


class Section extends React.Component<SectionProps, {}> {
    id: string
    data: Data

    constructor(props: SectionProps)
    {
        super(props)
        this.id = props.id
        this.data = props.data
    }


    render() {
        return (
            <div className="Section" id={this.id}>
                <Card className="Image">
                    <CardMedia 
                        component="img"
                        image={this.data.img}
                        alt={this.data.title}
                    />
                    <CardContent>{this.data.caption}</CardContent>
                </Card>
                <Card className="Content">
                    <CardContent>
                        <Typography>{this.data.title}</Typography>
                        <Typography>{this.data.description}</Typography>
                    </CardContent>
                        
                </Card>

            </div>
        )
    }
}


class Home extends React.Component<HomeProps, {}> {
    information: Array<Data>
    structure: Array<string>

    constructor(props: HomeProps)
    {
        super(props)
        this.information = Information.Home
        this.structure = ["Top", "Middle", "Bottom"]

    }

    render () {
        return (
            <div id="Home">
                {
                    this.information.map((element, index) => (
                        <Section id={this.structure[index]} data={element} />
                    ))
                }
                <div id="Timeline-Section">
                    <Button
                        component={Link}
                        to="/timeline"
                        endIcon={<ArrowForwardIosIcon />}
                        id="btnToTimeline"
                    >
                        Open the Timeline
                    </Button>
                </div>
            </div>
        )
    }
}

export default Home;