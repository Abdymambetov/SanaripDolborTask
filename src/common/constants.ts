export const PATHS = {
    main: '/',
    task1: '/task1',
    task2: '/task2',
    task3: '/task3',
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_KEY = '7ffc634c35509d3ecba6ae60d07e2fc0';


export interface User {
    id: number;
    name: string;
    email: string;
    address: {
      city: string;
    };
}

export interface WeatherData {
    weather: WeatherDescription[];
    name?: string;
    main: {
      temp: number;
    };
}

export interface WeatherDescription {
    icon: string;
    description: string;
}


export async function fetchUsers(): Promise<User[]>{
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
}

export async function fetchWeather(city: string): Promise<WeatherData> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    );
    const data = await response.json();
    return data;
}


