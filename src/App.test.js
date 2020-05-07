import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Dashboard component', () => {
  const { getByText } = render(<App />);
  const dashboardComponent = getByText(/Dashboard/i);
  expect(dashboardComponent).toBeInTheDocument();
});
