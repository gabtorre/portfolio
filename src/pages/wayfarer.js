import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import WayfarerVid from "../Wayfarer.mp4"

import { SiDjango } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

const Wayfarer = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Wayfarer" keywords={[`python`, `gatsby`, `javascript`, `react`, `django`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="wayfarer-">
            Wayfarer
          </h2>
          <h3>
            A travel community app for users to share posts about their favorite locations around the world.
          </h3>
          <ul className="actions fit" style={{padding: 0}}>
            <li style={{paddingLeft: 0}}>
              <a target="_blank" rel="noreferrer" href="https://wayfarer-gkm.herokuapp.com/" className="button primary fit">
                Live Demo
              </a>
              <sub>Username: demo - Password: demo1234</sub>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/gabtorre/wayfarer" className="button fit">
                Source Code
              </a>
            </li>
          </ul>
          
          <video controls style={{ width: `100%` }}>
            <source src={WayfarerVid} type="video/mp4" />
          </video>

          <h4 id="heading-level-4">Features</h4>
          <p>
            <ul>
              <li>Sign Up and Login to your account</li>
              <li>Create and update your profile page</li>
              <li>See all of your posts on your profile</li>
              <li>Visit a city page and see posts made by other users</li>
              <li>Add posts to any city page</li>
              <li>Add comments to posts</li>
              <li>Upload images using Cloudinary's Django SDK</li>
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
                <h1><SiDjango/></h1>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiPython/></h1>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiJavascript/></h1>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiPostgresql/></h1>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiBootstrap/></h1>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiCss3/></h1>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiHtml5/></h1>
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
      <Wayfarer location={props.location} data={data} {...props} />
    )}
  />
)
