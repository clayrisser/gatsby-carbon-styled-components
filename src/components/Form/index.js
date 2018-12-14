import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Form from './Form';

class StyledForm extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    const props = { ...this.props };
    return <Form {...props} style={this.style} />;
  }
}

export default styled(withTheme(StyledForm))``;
