import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Youtube extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    return (
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.id}`} frameborder="0" allowfullscreen></iframe>
    )
  }
}
