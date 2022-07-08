import React from "react";

import { 
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    Box,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Typography
 } from "@mui/material"

import {Link} from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import TimelineIcon from '@mui/icons-material/Timeline';


interface Props {
    id: string
}

interface State {
    open: boolean
}



class NavBar extends React.Component<Props, State> {
    id: string
    pages: Array<string>

    constructor(props: Props) 
    {
        super(props)
        this.id = props.id
        this.pages = [
            "bibliography",
            "timeline"
        ]
        this.state = {
            "open": false
        }
    }

    capitilize = (word: string): string => 
    {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    openDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => 
    {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) 
        {
            return;
        }
        this.setState({"open": open})
    }

    render() 
    {
        return (
            <div id={this.id}>
                <AppBar>
                    <Toolbar id="Toolbar">

                        <IconButton id="MenuIcon" onClick={this.openDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h4">Life cycle of Stars</Typography>

                        <Drawer
                            anchor="left"
                            id="Drawer"
                            onClose={this.openDrawer(false)}
                            open={this.state.open}
                        >
                            <Box
                                id="DrawerPaper"
                                onClick={this.openDrawer(false)}
                                onKeyDown={this.openDrawer(false)}
                            >
                                <List>
                                    <ListItem key="Home" component={Link} to="/" className="ListItem">
                                        <ListItemButton className="ListButton">
                                            <ListItemIcon className="ListIcon">
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Home"/>
                                        </ListItemButton>
                                    </ListItem>

                                    <ListItem key="Bibliography" component={Link} to="/bibliography" className="ListItem">
                                        <ListItemButton className="ListButton">
                                            <ListItemIcon className="ListIcon">
                                                <ArticleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Bibliography"/>
                                        </ListItemButton>
                                    </ListItem>

                                    <ListItem key="Timeline" component={Link} to="/timeline" className="ListItem">
                                        <ListItemButton className="ListButton">
                                            <ListItemIcon className="ListIcon">
                                                <TimelineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Timeline"/>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>

                    </Toolbar>

                </AppBar>

            </div>
        )
    }
}

export default NavBar;