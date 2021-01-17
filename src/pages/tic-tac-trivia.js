import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import TicTacTriviaVid from "../TicTacTrivia.mp4"

import { SiJquery } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

const TicTacTrivia = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="TicTacTrivia" keywords={[`express`, `gatsby`, `javascript`, `Mongo`, `node`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="TicTacTrivia-">
          TicTacTrivia
          </h2>
          <h3>
            Tic Tac Toe with a trivia twist, built using JavaScript, JQuery and CSS
          </h3>

          <ul className="actions fit" style={{padding: 0}}>
            <li style={{paddingLeft: 0}}>
              <a target="_blank" rel="noreferrer" href="https://gabtorre.github.io/Tic-Tac-Trivia/" className="button primary fit">
                Live Demo
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/gabtorre/Tic-Tac-Trivia" className="button fit">
                Source Code
              </a>
            </li>
          </ul>

          <video controls style={{ width: `100%` }}>
            <source src={TicTacTriviaVid} type="video/mp4" />
          </video>

          <h4 id="heading-level-4">Features</h4>
          <p>
            <ul>
              <li>Developed with JavaScript, HTML5, CSS3, API and jQuery</li>
              <li>Uses JavaScript and jQuery for DOM manipulation</li>
              <li>Receives JSON data from a trivia API (The Open Trivia Database)</li>
              <li>Deployed on Github Pages</li>
            </ul>
          </p>
          <h4 id="heading-level-4">Built with</h4>
          <div className="row">
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiJavascript/></h1>
                JavaScript
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiJquery/></h1>
                JQuery
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiCss3/></h1>
                CSS3
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiHtml5/></h1>
                HTML5
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <TicTacTrivia location={props.location} data={data} {...props} />
    )}
  />
)
