import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import { SiWordpress } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

const GabDev = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="gab.dev" keywords={[`express`, `gatsby`, `javascript`, `Mongo`, `node`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="gabdev-">
            gab.dev
          </h2>
          <h3>
            Blog to archive solutions to coding interview challenges (algorithms and data structures)
          </h3>

          <ul className="actions fit" style={{padding: 0}}>
            <li style={{paddingLeft: 0}}>
              <a target="_blank" rel="noreferrer" href="http://www.gabdev.tech/" className="button primary fit">
                Live Demo
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/gabtorre/gab-dev-wp" className="button fit">
                Source Code
              </a>
            </li>
          </ul>

          <div className="post-content-image">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image"
            />
          </div>


          <h4 id="heading-level-4">Features</h4>
          <p>
            <ul>
              <li>Developed with Wordpress, PHP, JavaScript, HTML5, CSS3</li>
              <li>Developed custom WordPress theme from scratch</li>
              <li>Designed and developed the website front end</li>
              <li>Developed responsive design with vanilla CSS</li>
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
                <h1><SiWordpress/></h1>
                WordPress
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiPhp/></h1>
                PHP
              </div>
            </div>
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
    file(relativePath: { eq: "gabdev.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "gabdev.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smallPic: file(
      relativePath: { eq: "gabdev.png" }
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
      <GabDev location={props.location} data={data} {...props} />
    )}
  />
)
