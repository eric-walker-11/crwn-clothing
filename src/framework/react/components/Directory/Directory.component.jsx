import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MenuItem } from 'framework/react/components';
import { selectors } from 'framework/redux';
import './Directory.styles.scss';

const { selectDirectorySections } = selectors;

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...menuItemProps }) => (
      <MenuItem key={id} {...menuItemProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
