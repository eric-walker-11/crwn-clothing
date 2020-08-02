import React from 'react';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Shop Now</span>
          </div>
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="content">
          <h1 className="title">Sneakers</h1>
          <span className="subtitle">Shop Now</span>
        </div>
        <div className="content">
          <h1 className="title">Women's</h1>
          <span className="subtitle">Shop Now</span>
        </div>
        <div className="content">
          <h1 className="title">Men's</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  );
};
