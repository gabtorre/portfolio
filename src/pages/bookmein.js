import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { SiNodeDotJs } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

const Wayfarer = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="BookMeIn" keywords={[`express`, `gatsby`, `javascript`, `Mongo`, `node`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="wayfarer-">
            BookMeIn
          </h2>
          <h3>
            An online booking application that allows users to book appointments with local barbershops.
          </h3>
          <ul className="actions fit" style={{padding: 0}}>
            <li style={{paddingLeft: 0}}>
              <a target="_blank" rel="noreferrer" href="https://bookmein2020.herokuapp.com/" className="button primary fit">
                Live Demo
              </a>
              <sub>Email: demo@demo.com - Password: demo1234</sub>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/gabtorre/bookmein" className="button fit">
                Source Code
              </a>
            </li>
          </ul>
          <Video
            videoSrcURL="https://www.youtube.com/embed/07MXKdyYAr4"
            videoTitle="BookMeIn - Full Stack Application"
            className="kg-image"
          />
          <h4 id="heading-level-4">Features</h4>
          <p>
            <ul>
              <li>Barbershops can:</li>
                <ul>
                  <li>Sign up and login to their business account</li>
                  <li>Update and edit company information on their profile</li>
                  <li>Create, edit, and delete available time slots</li>
                  <li>Accept and view upcoming appointments</li>
                  <li>Lets users book appointments with different barbershops</li>
                </ul>
              <li>Users can:</li>
                <ul>
                    <li>Sign up and login to their account</li>
                    <li>Browse barbershops and see their available time slots</li>
                    <li>Book appointments with different barbershops</li>
                    <li>See their upcoming appointments on their profiles</li>
                  </ul>
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
                <h1><SiNodeDotJs/></h1>
                Node.js
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
                <h1><SiMongodb/></h1>
                MongoDB
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
                <h1><SiBootstrap/></h1>
                Bootstrap
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
      <Wayfarer location={props.location} data={data} {...props} />
    )}
  />
)
