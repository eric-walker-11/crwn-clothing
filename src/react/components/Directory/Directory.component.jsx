import React, { Component } from 'react';
import { SECTIONS } from 'const';
import { MenuItem } from 'react/components/index';
import './Directory.styles.scss';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...menuItemProps }) => (
          <MenuItem key={id} {...menuItemProps} />
        ))}
      </div>
    );
  }
};
