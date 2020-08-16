import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <br />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 650,
          padding: `1rem 1rem`,
          border: `1px solid #e1e4e8`,
          borderRadius: `10px`,
        }}
      >
        {children}
      </div>
      <br />
    </div>
  );
}
