import React from "react";
import {Typography} from "@mui/material"
import Information from "./Information.json"

class Biblio extends React.Component<{}, {}> {

    render () {
        return (
            <div id="Biblio">

                <div id="Blob">

                    <Typography variant="h4">Bibliography</Typography>

                    <ul id="RefList">
                        {
                            Information.References.map(item => (<li>
                                <Typography variant="subtitle1">{item}</Typography>
                            </li>))
                        }
                    </ul>

                </div>
        
            </div>
        )
    }
}

export default Biblio;