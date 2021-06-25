import React from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export default function Layout({ children }) {
  const style = {
    margin: `2rem auto`,
    maxWidth: 650,
    padding: `0.5rem 0.5rem`,
    border: `1px solid #e1e4e8`,
    borderRadius: `6px`,
  };

  if (isMobile) {
    style.margin = `auto`;
    style.border = `inherit`;
    return <MobileView style={style}>{children}</MobileView>;
  }

  return <BrowserView style={style}>{children}</BrowserView>;
}
