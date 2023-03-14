import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SingleDocument from './SingleDocument';

test('renders document title and content', async () => {
  const mockTitle = 'Test Title';
  const mockContent = 'Test Content';
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => ({ title: mockTitle, content: mockContent })
  });

  render(
    <MemoryRouter initialEntries={[`/pages/1`]}>
      <Route path="/pages/:id">
        <SingleDocument />
      </Route>
    </MemoryRouter>
  );

  expect(await screen.findByText(mockTitle)).toBeInTheDocument();
  expect(await screen.findByText(mockContent)).toBeInTheDocument();
});

test('navigates back when back button is clicked', async () => {
  const mockTitle = 'Test Title';
  const mockContent = 'Test Content';
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => ({ title: mockTitle, content: mockContent })
  });

  const navigateMock = jest.fn();

  render(
    <MemoryRouter initialEntries={[`/pages/1`]}>
      <Route path="/pages/:id">
        <SingleDocument />
      </Route>
      <Route path="/" element={<button onClick={() => navigateMock(-1)}>Home</button>} />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/back/i));
  expect(navigateMock).toHaveBeenCalledWith(-1);
});
