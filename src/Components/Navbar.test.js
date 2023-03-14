import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar with logo and title', () => {
  render(<Navbar />);
  const logoElement = screen.getByAltText('passfort logo');
  const titleElement = screen.getByText('WikiDoc');
  expect(logoElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
});
