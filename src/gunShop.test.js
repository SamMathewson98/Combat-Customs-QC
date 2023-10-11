import { render, screen } from '@testing-library/react';
import App from './App';
import gunShop from './gunShop.js';
import GunCarousel from './Components/GunCarousel';
import GunObject from './Objects/GunObject.json'

test('renders learn react link', () => {
  render(<GunCarousel propss={GunObject} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});