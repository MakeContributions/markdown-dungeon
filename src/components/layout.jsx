import React from 'react';
import { isMobile } from 'react-device-detect';

export default function Layout({ children }) {
  const style = {
    margin: `2rem auto`,
    maxWidth: 650,
    padding: `2rem 2rem`,
    border: `1px solid #e1e4e8`,
    borderRadius: `6px`,
  };

  if (isMobile) {
    style.margin = `auto auto`;
  }

  return <div style={style}>{children}</div>;
}
