import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Header from '../components/header'
import './index.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="Header">
      <div className= "HeaderGroup">
      <Link to="/"><img width="50" src={require('../images/gabedsgn.png')} /></Link>
	    <Link to="/courses">Courses</Link>
	    <Link to="/downloads">Downloads</Link>
	    <Link to="/workshops">Workshops</Link>
	    <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>
    <div>
        <div className="Hero">
          <div className="HeroImage">
            <div className="HeroText">
            <h1>I design interfaces and graphics.</h1>
            </div>
            <div className="HeroLine">
            </div>
          </div>
        </div>
      </div>  
      {children()}
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
