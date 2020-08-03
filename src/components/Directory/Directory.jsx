import React, { Component } from 'react';
import { MenuItem } from 'components';
import initSections from './sections';
import './Directory.scss';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: initSections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, imageUrl, size, title }) => (
          <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
        ))}
      </div>
    );
  }
};
