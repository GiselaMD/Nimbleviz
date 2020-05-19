import React from 'react';
import { GlobalStyle } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
