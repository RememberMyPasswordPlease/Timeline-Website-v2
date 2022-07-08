import React from "react";

interface SocialProps {
    name: string,
    link: string
}

interface Props {
    id: string
    socialMedia: Array<SocialProps>
}

class Social extends React.Component<SocialProps, {}> {
    props: SocialProps

    constructor(props: SocialProps)
    {
        super(props)
        this.props = props
    }

    render() 
    {
        return (
            <a rel="noreferrer" target="_blank" href={this.props.link} className="SocialLink" aria-label={this.props.name}>
                <i className={`fa fa-${this.props.name}`}></i>
            </a>
        )
    }
}


class Footer extends React.Component<Props, {}> {
    props: Props

    constructor(props: Props)
    {
        super(props)
        this.props = props
    }

    render ()
    {
        return (
            <footer id={this.props.id}>
                <div id="Socials">
                    {
                        this.props.socialMedia.map(item => (
                            <Social name={item.name} link={item.link} />
                        ))
                    }
                </div>
                <h2>Pedro Rodriguez</h2>

            </footer>
        )
    }

}

export default Footer;