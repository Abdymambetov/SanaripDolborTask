import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Task3 from './Task3';
import { fetchWeather, WeatherData } from '../../common/constants';

jest.mock('../../common/constants', () => ({
  fetchWeather: jest.fn((city: string) => {
    if (city === 'NonExistingCity') {
      throw new Error('City not found');
    }
    return Promise.resolve({
      name: 'London',
      weather: [{ icon: '01d', description: 'Clear sky' }],
      main: { temp: 287.15 }, // Temperature in Kelvin
    } as WeatherData);
  }),
}));

describe('Task3', () => {
  test('displays weather data when city is searched', async () => {
    render(<Task3 />);
    const inputElement = screen.getByPlaceholderText('Enter city name...');
    fireEvent.change(inputElement, { target: { value: 'London' } });

    // Click the "Get Weather" button to trigger the search
    const buttonElement = screen.getByText('Get Weather');
    fireEvent.click(buttonElement);

    // Wait for the weather data to be displayed
    await waitFor(() => {
      expect(fetchWeather).toHaveBeenCalledTimes(1);
    });

    // Check if weather data is displayed correctly
    const weatherNameElement = screen.getByText('London');
    expect(weatherNameElement).toBeInTheDocument();

    const weatherIconElement = screen.getByAltText('Clear sky');
    expect(weatherIconElement).toBeInTheDocument();

    const temperatureElement = screen.getByText(/\d+°C/); // Using a regular expression to match the temperature text
    expect(temperatureElement).toBeInTheDocument();

    const weatherDescriptionElement = screen.getByText('Clear sky');
    expect(weatherDescriptionElement).toBeInTheDocument();
  });
});