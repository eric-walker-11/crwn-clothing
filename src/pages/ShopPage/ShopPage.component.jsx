import React, { Component } from 'react';
import { SHOP_DATA } from 'const';
import './ShopPage.scss';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return <div>SHOP PAGE</div>;
  }
}
