import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task1 from './Task1';

test('clicking "Add Item" button adds new item to the list', () => {
  render(<Task1 />);
  const addButton = screen.getByText(/Add Item/i);

  // Click the "Add Item" button three times
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);

  // After clicking three times, there should be three list items
  const listItemElements = screen.getAllByRole('listitem');
  expect(listItemElements).toHaveLength(3);
});