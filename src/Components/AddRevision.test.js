import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddRevision from './AddRevision';

describe('AddRevision component', () => {
  test('renders title and content inputs and submit button', () => {
    const { getByLabelText, getByText } = render(<AddRevision />);

    const titleInput = getByLabelText('Title:');
    const contentInput = getByLabelText('Content:');
    const submitButton = getByText('Submit');

    expect(titleInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('calls handleSubmit when submit button is clicked', () => {
    const handleSubmitMock = jest.fn();
    const { getByText } = render(<AddRevision handleSubmit={handleSubmitMock} />);

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
