import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const data = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/superseedstudios',
    icon: 'img/facebook-icon.svg',
  },
  {
    title: 'Twitter',
    link: 'https://www.twitter.com/superseedstudios',
    icon: 'img/twitter-icon.svg',
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/superseedstudios',
    icon: 'img/instagram-icon.svg',
  },
  {
    title: 'Vimeo',
    link: 'https://www.vimeo.com/superseedstudios',
    icon: 'img/vimeo-icon.svg',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/company/superseed-studios',
    icon: 'img/linkedin-icon.png',
  },


]

const Footer = class extends React.Component {
  render() {
    console.log('footer data', {data})
    return (
      <footer className="footer">
        <div className="footer-content content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column social">
                {data.map((d) => (
                  <a title={d.title} href={d.link}>
                    <img
                      src={d.icon}
                      alt={d.title}
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
