import React, { useState, useEffect } from 'react';
import CountrySelector from './components/CountrySelector';
import DataDisplay from './components/DataDisplay';
import { fetchGlobalData, fetchCountryData } from './services/api';
import ChartComponent from './components/ChartComponent'; // Import the chart component
import Lottie from 'lottie-react'; // Import Lottie Player
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon
import animationData from './animation.json'; // Import the animation JSON
import './App.css'; // Import custom styles

const App = () => {
    const [country, setCountry] = useState('Global');
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                let result;
                if (country === 'Global') {
                    result = await fetchGlobalData(); // Fetch global data
                } else {
                    result = await fetchCountryData(country); // Fetch country-specific data
                }
                setData(result);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [country]);

    const handleCountryChange = (selectedCountry) => {
        setCountry(selectedCountry);
    };

    return (
        <div className="App">
            <h1 style={{ color: "#4476aa" }}>COVID-19 Tracker</h1>
            <CountrySelector onCountryChange={handleCountryChange} />
            {loading ? (
                <div className="loading-container">
                    <Lottie
                        animationData={animationData}
                        style={{ height: '200px', width: '200px' }}
                    />
                    <FaSpinner className="spinner-icon" />
                    <p>Loading data...</p>
                </div>
            ) : (
                <>
                    <DataDisplay data={data} />
                    <ChartComponent data={data} />
                </>
            )}
        </div>
    );
};

export default App;