import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

class JobsRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    if (posts.length == 0){
      return (
        <div className="pitch-description" style={{ textAlign: 'center' }}><strong>{data.noJobsDescription}</strong></div>
      )
    } else {
      return (
        <div className="columns is-multiline">
          {posts &&
              posts.map(({ node: post }) => (
                <article class="media" style={{ width: '100%' }}>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>{post.frontmatter.title}</strong>
                        <br/>
                        <small>Job posted on: {post.frontmatter.date}</small>
                        <br/>
                        <div className="job-description">{post.frontmatter.description}</div>
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <div class="tags has-addons">
                          <span class="tag is-success">Apply via email:</span>
                          <span class="tag is-light" style={{ textDecoration: '', fontWeight: 700 }}>{post.frontmatter.email}</span>
                        </div>
                      </div>
                    </nav>
                  </div>
                </article>
            ))}
        </div>
      )
    }
  }
}

JobsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query JobsPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "job-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                email
              }
            }
          }
        }
      }
    `}
    render={data => (
      <JobsRoll data={data} />
    )}
  />
)
