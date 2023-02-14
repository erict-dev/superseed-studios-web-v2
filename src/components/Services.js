import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Services extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="services-container" style={{ marginTop: 20, marginBottom: 40}}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="service-item">
              <img alt={post.frontmatter.title} className="service-icon" src={post.frontmatter.image.publicURL}/>
              <div className="service-name">{post.frontmatter.title}</div>
            </div>
          ))}

        </div>

    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesComponentQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "services-item" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                image {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Services data={data} />
    )}
  />
)
