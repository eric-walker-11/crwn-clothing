import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from 'framework/react/components';
import { CollectionShopPage } from 'framework/react/pages';

import './ShopPage.styles.scss';

export default ({ match }) => (
  <div className="shop-page">
    <Route component={CollectionsOverview} exact path={match.path} />
    <Route
      component={CollectionShopPage}
      path={`${match.path}/:collectionTitle`}
    />
  </div>
);
