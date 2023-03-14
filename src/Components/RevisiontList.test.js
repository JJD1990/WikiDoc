import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axiosMock from 'axios';
import RevisionList from './RevisionList';

jest.mock('axios');

describe('RevisionList component', () => {
  const mockRevisions = [
    { id: 1, title: 'Revision 1' },
    { id: 2, title: 'Revision 2' },
  ];

  beforeEach(() => {
    axiosMock.get.mockResolvedValue({ data: mockRevisions });
  });

  it('renders the list of revisions', async () => {
    const { getByText } = render(<RevisionList />);

    await waitFor(() => {
      expect(getByText('Revision 1')).toBeInTheDocument();
      expect(getByText('Revision 2')).toBeInTheDocument();
    });
  });
});
