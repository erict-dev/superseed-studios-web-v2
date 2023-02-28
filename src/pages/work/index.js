import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import WorkRoll from '../../components/WorkRoll'

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout navTitle="Our Work">
        <WorkRoll data={this.props.data}/>
      </Layout>
    )
  }
}

export const paginatedWorkQuery = graphql`
  query WorkRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "work-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            subtitle
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredVideo {
              publicURL
            }
            demoVideo {
              channel
              videoId
            }
          }
        }
      }
    }
  }
`
