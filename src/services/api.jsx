import axios from 'axios';

const API_URL = 'https://disease.sh/v3/covid-19';

export const fetchGlobalData = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data; // Returns global data
    } catch (error) {
        console.error('Error fetching global data:', error);
        throw error;
    }
};

export const fetchCountryData = async (country) => {
    try {
        const response = await axios.get(`${API_URL}/countries/${country}`);
        return response.data; // Returns country-specific data
    } catch (error) {
        console.error(`Error fetching data for ${country}:`, error);
        throw error;
    }
};

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${API_URL}/countries`);
        return response.data.map((country) => country.country); // Extract country names
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};