import React from 'react'
import PropTypes from 'prop-types'

import PlayButton from "../img/icons/Play-Button.png"

import LazyLoad from 'react-lazyload';

import ModalVideo from 'react-modal-video'

class WorkRoll extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false,
      isOpen: false,
      resizeNotifier: () => {},
      channel: '',
      videoId: ''
    };
    this.openModal = this.openModal.bind(this)
  }

  openModal(channel, videoId) {
    this.setState({
      isOpen: true,
      channel: channel,
      videoId: videoId
    });
  }


  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
      <ModalVideo channel={this.state.channel} isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
      {posts &&
        posts.map(({ node: post }) => (
        <LazyLoad height={720} offset={100}>
          <div className="" key={post.id}>
            <article className="work-container" style={{}}>
              <video
                style={{ objectFit: 'cover', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})`}}
                className="video-cover-background"
                src= {post.frontmatter.featuredVideo.publicURL}
                autoPlay
                muted
                loop
              />

            <div className="work-container-content">
              <div className="container">
                <div className="columns no-gap-mobile">
                  <div className="column is-4">
                    <div className="work-title">{post.frontmatter.title}</div>
                    <div className="work-subtitle">{post.frontmatter.subtitle}</div>
                    <div className="work-demo-button-container" onClick={() => this.openModal(post.frontmatter.demoVideo.channel, post.frontmatter.demoVideo.videoId)}>
                      <img alt="Watch demo" className="play-icon" src={PlayButton}/>
                      <span className="play-icon-text">Watch demo</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="work-description">{post.frontmatter.description}</div>
                  </div>
                </div>
              </div>
            </div>

          </article>
        </div>
          </LazyLoad>
        ))}
      </>
  )
  }
}

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default WorkRoll

