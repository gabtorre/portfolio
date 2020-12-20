import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
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
          <Video
            videoSrcURL="https://www.youtube.com/embed/Ek9-lvpS6ss"
            videoTitle="Wayfarer - Full Stack Application"
            className="kg-image"
          />
          <div className="row">
            <div className="col-6">
              <div
                style={{
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div style={{fontSize: '2em'}}><AiFillGithub /></div>
                {" "}
                  <a target="_blank" rel="noreferrer" href="https://github.com/gabtorre/wayfarer">
                  Source Code 
                  </a>
                {" "}
              </div>
            </div>
            <div className="col-6">
              <div
                style={{
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div style={{fontSize: '2em'}}><BiLinkExternal /></div>
                {" "}
                  <a target="_blank" rel="noreferrer" href="https://wayfarer-gkm.herokuapp.com/">
                  Username: demo - Password: demo1234
                  </a>
                {" "}
              </div>
            </div>
          </div>
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
