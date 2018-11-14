import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import Button from './Button'

class StyledButton extends Component {
  get style() {
    return {
      ...this.props.style,
    }
  }

  render() {
    console.log('className', this.props.className)
    return <Button {...this.props} style={this.style} />
  }
}

export default styled(withTheme(StyledButton))`
  color: blue;
  background-color: orange;
`
