import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1rem 1rem` }}>
      {children}
    </div>
  );
}
