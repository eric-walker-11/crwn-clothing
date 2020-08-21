import React from 'react';
import { CustomButton } from 'framework/react/components';
import './CollectionItem.styles.scss';

export default ({ imageUrl, name, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to Cart</CustomButton>
  </div>
);
