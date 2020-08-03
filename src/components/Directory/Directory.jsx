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
        {this.state.sections.map(({ id, title }) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
};
