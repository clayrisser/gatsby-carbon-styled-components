import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Button from './Button';

class StyledButton extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  static defaultProps = {
    style: {}
  };

  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Button {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledButton))`
  color: blue;
  background-color: orange;
  border-radius: 25px;
`;
