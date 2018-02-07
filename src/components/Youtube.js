import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube';

export default class Youtube extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
      console.log('VIDEO ',this.props.id)
    return (
      <img src={`http://img.youtube.com/vi/${this.props.id}/maxresdefault.jpg`} alt="Youtube Video"/>
    )
  }
}
