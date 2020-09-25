import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionPreview } from 'framework/react/components';
import { selectors } from 'framework/redux';

import './CollectionsOverview.styles.scss';

const { selectShopCollectionsList } = selectors;

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsList
});

export default connect(mapStateToProps)(CollectionsOverview);
