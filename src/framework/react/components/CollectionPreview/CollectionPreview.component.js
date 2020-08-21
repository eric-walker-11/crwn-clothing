import React from 'react';
import { CollectionItem } from 'framework/react/components';
import './CollectionPreview.styles.scss';

export default function CollectionPreview({ items, title }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <div className="preview">
        {
          items
            .filter((item, i) => i < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
}
