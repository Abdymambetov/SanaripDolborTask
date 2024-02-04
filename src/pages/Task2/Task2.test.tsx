import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom for custom matchers
import Task2 from './Task2';
import { fetchUsers, User } from '../../common/constants';

jest.mock('../../common/constants', () => ({
  fetchUsers: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: { city: 'New York' },
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        address: { city: 'Los Angeles' },
      },
    ])
  ),
}));

describe('Task2', () => {
  test('filters users by name', async () => {
    render(<Task2 />);

    const inputElement = screen.getByPlaceholderText('Search by name...');

    // Type the search term
    const searchTerm = 'John';
    await waitFor(() => {
      fireEvent.change(inputElement, { target: { value: searchTerm } });
    });

    // Check if filtered users are displayed correctly
    const nameElement = screen.getByText('Name: John Doe');
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByText('Email: john.doe@example.com');
    expect(emailElement).toBeInTheDocument();

    const cityElement = screen.getByText('City: New York');
    expect(cityElement).toBeInTheDocument();

    // Check if other user is not displayed
    const janeElement = screen.queryByText('Name: Jane Smith');
    expect(janeElement).not.toBeInTheDocument();
  });
});
