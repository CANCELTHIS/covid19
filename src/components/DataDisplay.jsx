import React from 'react';
import { FaVirus, FaHeartbeat, FaSkull, FaProcedures, FaClock } from 'react-icons/fa'; // Import icons
import './DataDisplay.css'; // Import custom styles

const DataDisplay = ({ data }) => {
    if (!data || Object.keys(data).length === 0) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="data-display">
            <h2 className="data-title">
                COVID-19 Data for {data.country ? data.country : 'Global'}
            </h2>
            <div className="data-item">
                <FaVirus className="data-icon cases-icon" />
                <p>Total Cases: <span>{data.cases.toLocaleString()}</span></p>
            </div>
            <div className="data-item">
                <FaSkull className="data-icon deaths-icon" />
                <p>Total Deaths: <span>{data.deaths.toLocaleString()}</span></p>
            </div>
            <div className="data-item">
                <FaHeartbeat className="data-icon recovered-icon" />
                <p>Total Recovered: <span>{data.recovered.toLocaleString()}</span></p>
            </div>
            <div className="data-item">
                <FaProcedures className="data-icon active-icon" />
                <p>Active Cases: <span>{data.active.toLocaleString()}</span></p>
            </div>
            <div className="data-item">
                <FaClock className="data-icon updated-icon" />
                <p>Last Updated: <span>{new Date(data.updated).toLocaleString()}</span></p>
            </div>
        </div>
    );
};

export default DataDisplay;