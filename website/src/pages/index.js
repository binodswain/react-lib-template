import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Prism from "prismjs"
import ReactPackage from "react-lib-template";



const htmlcode = `import React, { Component } from 'react';
import ReactPackage from 'react-lib-template';

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactPackage/>
      </div>
    )
  }
}
`

const IndexPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    setTimeout(() => {
      Prism.highlightAll()
    }, 0)
  }, [])

  return (
    <Layout>
      <SEO title="Demo" />

      <section className="badges">
        <a aria-hidden="true" href="https://www.npmjs.com/package/react-lib-template">
          <img
            src="https://badgen.net/npm/v/react-faq-component"
            alt="release"
          />
        </a>
        <a aria-hidden="true" href="https://github.com/binodswain/react-lib-template/issues">
          <img
            src="https://badgen.net/github/open-issues/binodswain/react-lib-template"
            alt="open-issues"
          />
        </a>
        <a aria-hidden="true" href="https://github.com/binodswain/react-lib-template/blob/master/LICENSE">
          <img
            src="https://badgen.net/github/license/binodswain/react-lib-template"
            alt="license"
          />
        </a>
        <a aria-hidden="true" href="https://github.com/binodswain/react-lib-template/actions?query=workflow%3ATest">
          <img
            src="https://github.com/binodswain/react-lib-template/workflows/Test/badge.svg"
            alt="test status"
          />
        </a>
        <a aria-hidden="true" href="https://github.com/binodswain/react-lib-template/actions?query=workflow%3ABuild">
          <img
            src="https://github.com/binodswain/react-lib-template/workflows/Build/badge.svg"
            alt="build status"
          />
        </a>
      </section>

      <section className="demo">
        <h2>Demo</h2>
        <ReactPackage/>
      </section>

      <section className="usage">
        <h3>Usage</h3>
        <div>Install the package.</div>
        <pre>
          <code className="language-markup">
            npm install --save react-lib-template
          </code>
        </pre>
        <div>Import the package.</div>
        <pre>
          <code className="language-jsx">
            import Faq from 'react-lib-template';
          </code>
        </pre>
        <br />
        <div>example: </div>
        <br />
        <pre className="line-numbers">
          <code className="language-jsx">{htmlcode}</code>
        </pre>
      </section>
      <section className="dataformat">
        <h3>Props</h3>
        <p>
          No props need to be passed to the package.
        </p>

      </section>
    </Layout>
  )
}

export default IndexPage
