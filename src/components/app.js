import React, { Component } from 'react';

import StripeCheckout from './StripeCheckout'

export default class App extends Component {
  render() {
    return (
      <div>
        <StripeCheckout />
      </div>
    );
  }
}
