import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import { SiReact } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

const FilmswithFriendsRN = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="FilmswithFriendsRN" keywords={[`react native`, `firebase`, `javascript`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="wayfarer-">
            Films with Friends
          </h2>
          <h3>
            A React Native app for rating and talking about movies that lets users post twitter-style hot takes on movies.
          </h3>
          <ul className="actions fit" style={{padding: 0}}>
            <li style={{paddingLeft: 0}}>
              <a target="_blank" rel="noreferrer" href="https://filmswithfriends.netlify.app/" className="button primary fit">
                Live Demo
              </a>
              <sub>Email: demo@gmail.com - Password: Demo2020</sub>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/gabtorre/fimlswithfriends-react-native" className="button fit">
                Source Code
              </a>
            </li>
          </ul>

          <Video
            videoSrcURL="https://www.youtube.com/embed/W_CnADZlSIo"
            videoTitle="Films with Friends - React Native"
            className="kg-image"
          />
          
          <h4 id="heading-level-4">Features</h4>
          <p>
            <ul>
              <li>Sign up and login to your account</li>
              <li>Login and Sign Up with your Google account</li>
              <li>Search for movies from The Movie Database API</li>
              <li>Post twitter-style movie reviews</li>
              <li>Rate movies based on a star rating system</li>
              <li>Comment on other's reviews</li>
              <li>Like other users' reviews</li>
              <li>Add and remove movies from your watch-list</li>
              <li>Follow other users and see their movie lists</li>
              <li>Add movies to your watch-list from other users lists</li>
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
                <h1><SiReact/></h1>
                React Native
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1><SiFirebase/></h1>
                Firebase
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
                <h1><FaSass/></h1>
                Sass
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
      <FilmswithFriendsRN location={props.location} data={data} {...props} />
    )}
  />
)
