import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {label} from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();

  const actual = 1;
  const expected = 1;
  expect(actual).toEqual(expected);
});


test( "generates la label", () => {
  const result = label('diduct');
  expect(result).toEqual("Hello React");
})