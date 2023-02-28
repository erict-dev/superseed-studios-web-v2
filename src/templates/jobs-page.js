import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import JobsRoll from '../components/JobsRoll'

export const JobsPageTemplate = ({
  title,
  description,
  noJobsDescription
}) => (
  <>
  <div className="section-spacer" />

  <section className="container">
    <div className="pitch-content-container" style={{ textAlign: 'center' }}>
      <div className="pitch-title">{title}</div>
      <div className="pitch-description">{description}</div>
    </div>
  </section>

  <div className="section-spacer" />

  <section className="section">
    <div className="container">
      <div className="content">
        <JobsRoll placeholder={noJobsDescription}/>
      </div>
    </div>
  </section>

  <div className="section-spacer" style={{ height: 20 }}/>
  </>
)

const JobsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout navTitle="Jobs">
      <JobsPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        noJobsDescription={frontmatter.noJobsDescription}
      />
    </Layout>
  )
}

export default JobsPage

export const pageQuery = graphql`
  query JobsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "jobs-page" } }) {
      frontmatter {
        title
        description
        noJobsDescription
      }
    }
  }`
