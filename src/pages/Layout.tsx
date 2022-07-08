import React from "react";
import { Outlet } from "react-router-dom"
import { NavBar, Footer } from "../components"
import Information from "./Information.json"


class Layout extends React.Component<{}, {}> {

    render () {
        return (
            <div id="Layout">

                <NavBar id="Appbar" />

                <div id="Page">
                    <Outlet />
                </div>

                <Footer id="Footer" socialMedia={Information.Socials}/>

            </div>
        )
    }
}

export default Layout;