import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'

export const IndexPageTemplate = ({
  featuredVideoPoster,
  featuredVideo,
  title,
  mainpitch,
  secondarypitch,
  featuredClient1,
  featuredClient2,
  featuredClient3,
  featuredClient4,
  featuredClient5,
  featuredClient6,
}) => (
  <div>
    <div class="hero is-medium" style={{ position: 'relative' }}>
        <video
          className="hero-video-cover"
          style={{  objectFit: 'cover', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${featuredVideoPoster.childImageSharp.fluid.src})`}}
          src={featuredVideo.publicURL}
          autoPlay
          muted
          loop
        />
      <section class="hero-body">
        <div class="container hero-title-container has-text-centered">
          <div className="hero-title">Superseed Studios</div>
        </div>
      </section>
    </div>

    <section className="container">
      <div className="section-spacer" />
      <div class="columns is-desktop">
        <div class="column">
          <div className="pitch-content-container">
            <div className="pitch-title">{mainpitch.title}</div>
            <div className="pitch-description">
              <p>{mainpitch.description}</p>
              <br />
              <p>{mainpitch.description2}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="container">
      <div className="columns">
        <div className="column">
          <div className="pitch-content-container" style={{}}>
            <div className="pitch-title">{secondarypitch.title}</div>
            <div className="pitch-description">{secondarypitch.description}</div>

            <div className="clients-container">
              <img alt="" className="client-img" src={featuredClient1.childImageSharp.fluid.src}/>
              <img alt="" className="client-img" src={featuredClient2.childImageSharp.fluid.src}/>
              <img alt="" className="client-img" src={featuredClient3.childImageSharp.fluid.src}/>
              <img alt="" className="client-img" src={featuredClient4.childImageSharp.fluid.src}/>
              <img alt="" className="client-img" src={featuredClient5.childImageSharp.fluid.src}/>
              <img alt="" className="client-img" src={featuredClient6.childImageSharp.fluid.src}/>
            </div>

          </div>
          <div>
            <video
              style={{ objectFit: 'cover', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${secondarypitch.secondaryVideoPoster.childImageSharp.fluid.src})`}}
              src={secondarypitch.secondaryVideo.publicURL}
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </section>

    <div className="section-spacer" />

    <section className="container">
        <div className="bottom-cta">
          <div className="pitch-title" style={{ textAlign: 'center', maxWidth: '600px' }}>We can help you with your next animation project</div>
          <Services />
          <Link to="/contact"><button className="cta-button button is-light is-outlined is-rounded">Contact</button></Link>
        </div>
    </section>

    <div className="section-spacer" style={{ height: 20 }}/>

  </div>
)

IndexPageTemplate.propTypes = {
  featuredVideo: PropTypes.object,
  featuredVideoPoster: PropTypes.object,
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  secondarypitch: PropTypes.object,
  featuredClient1: PropTypes.object,
  featuredClient2: PropTypes.object,
  featuredClient3: PropTypes.object,
  featuredClient4: PropTypes.object,
  featuredClient5: PropTypes.object,
  featuredClient6: PropTypes.object,
  /*intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),*/
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout navTitle="Superseed Studios">
      <IndexPageTemplate
        featuredVideo={frontmatter.featuredVideo}
        featuredVideoPoster={frontmatter.featuredVideoPoster}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        secondarypitch={frontmatter.secondarypitch}
        featuredClient1={frontmatter.featuredClient1}
        featuredClient2={frontmatter.featuredClient2}
        featuredClient3={frontmatter.featuredClient3}
        featuredClient4={frontmatter.featuredClient4}
        featuredClient5={frontmatter.featuredClient5}
        featuredClient6={frontmatter.featuredClient6}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        featuredVideo {
          publicURL
        }
        featuredVideoPoster {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
          description2
        }
        secondarypitch {
          title
          description
          secondaryVideoPoster {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          secondaryVideo {
            publicURL
          }
        }
        featuredClient1 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredClient2 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredClient3 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredClient4 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredClient5 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredClient6 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`
