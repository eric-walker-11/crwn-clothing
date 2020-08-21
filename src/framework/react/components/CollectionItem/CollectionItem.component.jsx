import React from 'react';
import { connect } from 'react-redux';
import { CustomButton } from 'framework/react/components';
import { actions } from 'framework/redux';
import './CollectionItem.styles.scss';

const CollectionItem = ({ addCartItem, item }) => {
  const { imageUrl, name, price } = item;
  return (
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
      <CustomButton inverted onClick={() => addCartItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(actions.addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
