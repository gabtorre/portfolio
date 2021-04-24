import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">

              <li className="nav-elements" role="menuitem">
                <Link to={`/filmswithfriends-react-native`}>Films with Friends - React Native</Link>
              </li>

              <li className="nav-elements" role="menuitem">
                <Link to={`/filmswithfriends`}>Films with Friends</Link>
              </li>

              <li className="nav-elements" role="menuitem">
                <Link to={`/wayfarer`}>Wayfarer</Link>
              </li>

              <li className="nav-elements" role="menuitem">
                <Link to={`/bookmein`}>BookMeIn</Link>
              </li>

              <li className="nav-elements" role="menuitem">
                <Link to={`/gabdev`}>gab.dev</Link>
              </li>

              <li className="nav-elements" role="menuitem">
                <Link to={`/tic-tac-trivia`}>TicTacTrivia</Link>
              </li>

            </ul>
          </nav>

          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://github.com/gabtorre"
                title="Gtihub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/gabtorres/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:gtorresx3@gmail.com"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
