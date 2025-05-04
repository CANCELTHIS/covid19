import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/api';
import { FaGlobe } from 'react-icons/fa'; // Import a globe icon
import { MdArrowDropDown } from 'react-icons/md'; // Import a dropdown arrow icon
import './CountrySelector.css'; // Import custom styles

const CountrySelector = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        console.log('Fetched countries:', data); // Log the fetched countries
        setCountries(data); // Directly set the fetched data
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    getCountries();
  }, []);

  return (
    <div className="country-selector">
      <label htmlFor="country-dropdown" className="country-label">

      </label>
      <div className="dropdown-container">
        <select
          id="country-dropdown"
          className="country-dropdown"
          onChange={(e) => onCountryChange(e.target.value)}
        >
          <option value="Global">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <MdArrowDropDown className="dropdown-icon" />
      </div>
    </div>
  );
};

export default CountrySelector;