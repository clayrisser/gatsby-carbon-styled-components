import React from 'react';
import styled, { withTheme } from 'styled-components';
import Slider from './Slider';

class StyledSlider extends React.Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    const props = { ...this.props };
    return <Slider {...props} style={this.style} />;
  }
}

export default styled(withTheme(StyledSlider))``;
