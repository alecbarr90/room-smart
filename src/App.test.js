import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  const heading = screen.getByText(/HOW TO BE THE SMARTEST PERSON IN THE ROOM!/i);
  expect(heading).toBeInTheDocument();
});
