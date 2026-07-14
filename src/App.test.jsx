import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('renders the main heading', () => {
  render(<App />);
  const heading = screen.getByText(/HOW TO BE THE SMARTEST PERSON IN THE ROOM!/i);
  expect(heading).toBeInTheDocument();
});

test('applies the newly selected category when searching', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/type your search/i), {
    target: { value: 'story' },
  });
  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'models-magical' },
  });

  expect(screen.getByText(/found 0 techniques/i)).toBeInTheDocument();
});

test('keeps saved techniques after the app remounts', () => {
  const { unmount } = render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /keep it simple/i }));
  fireEvent.click(screen.getAllByRole('button', { name: 'Save this tip' })[0]);

  expect(JSON.parse(window.localStorage.getItem('room-smart:saved-tips'))).toContain('break-it-down');

  unmount();
  render(<App />);

  expect(screen.getByText('Break it Down')).toBeInTheDocument();
});

test('moves focus into a scenario dialog and closes it with Escape', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /in a meeting/i }));

  expect(screen.getByRole('dialog', { name: /in a meeting/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /close modal/i })).toHaveFocus();

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
