import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import ContentSwitcher from './Contentswitcher';

class StyledContentSwitcher extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    const props = { ...this.props };
    return <ContentSwitcher {...props} style={this.style} />;
  }
}

export default styled(withTheme(StyledContentSwitcher))``;
