import React from 'react';
import { render, screen } from '@testing-library/react';
import DocumentList from './DocumentList';

describe('DocumentList component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ titles: ['Document 1', 'Document 2'] }),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  test('renders document titles', async () => {
    render(<DocumentList />);
    const documentTitles = await screen.findAllByRole('heading', { level: 2 });
    expect(documentTitles).toHaveLength(2);
    expect(documentTitles[0]).toHaveTextContent('Document 1');
    expect(documentTitles[1]).toHaveTextContent('Document 2');
  });

  test('renders link to view document', async () => {
    render(<DocumentList />);
    const viewDocumentLinks = await screen.findAllByRole('link', { name: 'View Document' });
    expect(viewDocumentLinks).toHaveLength(2);
    expect(viewDocumentLinks[0]).toHaveAttribute('href', '/pages/1');
    expect(viewDocumentLinks[1]).toHaveAttribute('href', '/pages/2');
  });
});
