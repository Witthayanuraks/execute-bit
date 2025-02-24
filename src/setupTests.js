// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Importing the React and ReactDOM libraries for rendering components
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// This test case checks if the button renders with the correct text
test('renders button with correct text', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Decode/i);
  expect(buttonElement).toBeInTheDocument();
});

// This test case checks if the input field renders with the correct placeholder
test('renders input field with correct placeholder', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText(/Masukkan teks terenkripsi.../i);
  expect(inputElement).toBeInTheDocument();
}); 