import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card ${props.count % 5 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
  >
    <Link id="cards" className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        {props.node.frontmatter.description && (
            <p class="post-content-excerpt">{props.node.frontmatter.description}</p>
          )}
          
          {props.node.frontmatter.tech && (
            <p class="post-content-excerpt">
              Built with {props.node.frontmatter.tech}</p>
          )}
        <ul className="actions">
          {props.node.frontmatter.live && (
            <li style={{marginLeft: 'auto'}}>
            <a href={props.node.frontmatter.live} target="_blank" className="button primary">
            Demo
            </a>
            </li>
          )}

          {props.node.frontmatter.git && (
            <li style={{marginRight: 'auto'}}>
            <a href={props.node.frontmatter.git} target="_blank" className="button">
            Code
            </a>
            </li>
          )}
          </ul>
      </div>
    </Link>
  </article>
)
