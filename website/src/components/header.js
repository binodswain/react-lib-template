import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GithubFork from "./githubFork"

const Header = (props) => {
    const { siteTitle, description } = props
    console.log(props);
    return (
        <header
            style={{
                background: `black`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `10.45rem 1.0875rem`,
                    textAlign: "center",
                }}
            >
                <h1>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
                <p className="desc">{description}</p>

                <GithubFork />
            </div>
        </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
