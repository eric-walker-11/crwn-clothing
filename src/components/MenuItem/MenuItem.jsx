import React from 'react';
import './MenuItem.scss';

export default function MenuItem({ imageUrl, size, title }) {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};
