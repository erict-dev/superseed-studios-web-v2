import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'

export const ContactPageTemplate = ({ title, projectInquiries, servicesProvided }) => {

  return (
    <>
    <div className="section-spacer" />

    <section className="container">
      <div className="pitch-content-container" style={{}}>
        <div className="pitch-title">{projectInquiries.title}</div>
        <div className="pitch-description">{projectInquiries.description}</div>
        <br/>
        <div class="tags has-addons">
          <span class="tag is-success">Email us:</span>
          <span class="tag is-light" style={{ textDecoration: '', fontWeight: 700 }}>{projectInquiries.email}</span>
        </div>
      </div>
    </section>

    <div className="section-spacer" />

    <section className="container">
      <div className="pitch-content-container" style={{}}>
        <div className="pitch-title">{servicesProvided.title}</div>
        <div className="pitch-description">{servicesProvided.description}</div>
        <Services />
      </div>
    </section>

    <div className="section-spacer" style={{ height: 20 }}/>

    </>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  projectInquiries: PropTypes.object,
  servicesProvided: PropTypes.object,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout navTitle="Contact us">
      <ContactPageTemplate
        title={frontmatter.title}
        projectInquiries={frontmatter.projectInquiries}
        servicesProvided={frontmatter.servicesProvided}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" }}) {
      frontmatter {
        title
        projectInquiries {
          title
          description
          email
        }
        servicesProvided {
          title
          description
        }
      }
    }
  }
`
