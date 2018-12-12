import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as CarbonButton } from 'carbon-components-react';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return <CarbonButton {...this.props}>{this.props.children}</CarbonButton>;
  }
}
