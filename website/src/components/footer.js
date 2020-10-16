import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GithubFork from "./githubFork"

const Footer = props => {
    const { siteTitle, description, github } = props
    console.log(props)
    return (
        <footer
            style={{
                background: `black`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1.45rem 1.0875rem`,
                }}
            >
                <h4
                    style={{
                        color: "white",
                        margin: 0,
                        marginBottom: `1em`,
                    }}
                >
                    MIT © {` `}
                    <a
                        href={github}
                        style={{
                            color: "white",
                        }}
                    >
                        Binod Swain
                    </a>
                </h4>
                <p className="desc">
                    This is how the demo site will look like. <br />
                    Update the website folder to generate a static site.
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
