import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'

export const AboutPageTemplate = ({ title, pitch, secondaryPitch, services, profile}) => {

  return (
    <>
    <div className="section-spacer" />

    <section className="container">
      <div className="pitch-content-container" style={{}}>
        <div className="pitch-title">{pitch.title}</div>
        <div className="pitch-description">{pitch.description}</div>
      </div>
    </section>

    <div className="section-spacer" />

    <section className="container">
      <div className="pitch-content-container" style={{}}>
        <div className="pitch-title">{secondaryPitch.title}</div>
        <div className="pitch-description">{secondaryPitch.description}</div>
      </div>
    </section>

    <div className="section-spacer" />

    <section className="container">
      <div className="pitch-content-container" style={{}}>
        <div className="pitch-title">{services.title}</div>
        <div className="pitch-description">{services.description}</div>
        <Services />
      </div>
    </section>

    <div className="section-spacer" />

    <section className="container">
      <div className="pitch-content-container" style={{}}>
        <div id="profile-title" className="pitch-title">{profile.title}</div>
        <div className="columns">
          <div className="column is-one-fifth profile-container" style={{}}>
            <img alt="jason" className="profile-img" src={profile.image.childImageSharp.fluid.src} />
            <div className="profile-name">{profile.name}</div>
            <div className="profile-role">{profile.role}</div>
          </div>
          <div className="column" style={{ paddingTop: '1rem' }}>
            <div className="pitch-description">{profile.description}</div>
          </div>
        </div>
      </div>
    </section>

    <div className="section-spacer" style={{ height: 20 }}/>

    </>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  pitch: PropTypes.object,
  secondaryPitch: PropTypes.object,
  services: PropTypes.object,
  profile: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout navTitle="About us">
      <AboutPageTemplate
        title={frontmatter.title}
        pitch={frontmatter.pitch}
        secondaryPitch={frontmatter.secondaryPitch}
        services={frontmatter.services}
        profile={frontmatter.profile}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        pitch {
          title
          description
        }
        secondaryPitch {
          title
          description
        }
        services {
          title
          description
        }
        profile {
          title
          description
          name
          title
          role
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
