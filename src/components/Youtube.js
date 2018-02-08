import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Youtube extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: 25,
        height: 0,
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${this.props.id}`} frameborder="0" allowfullscreen>
        </iframe>
      </div>
    )
  }
}
