import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <footer className="footer">
        <div className="footer-content content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column social">
                {posts &&
                    posts.map(({ node: post }) => (
                      <a title={post.frontmatter.title} href={post.frontmatter.link}>
                        <img
                          src={post.frontmatter.icon.publicURL}
                          alt={post.frontmatter.title}
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

export default () => (
  <StaticQuery
    query={graphql`
      query FooterSocialQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { type: { eq: "footer-social" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                link
                icon {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Footer data={data} />
    )}
  />
)

