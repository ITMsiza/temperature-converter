import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [degree, setDegree] = useState('');
  const [letterF, setLetterF] = useState('');

  
  const handleCelsiusChange = () => {
    setFahrenheit(((celsius * 9) / 5 + 32));
    setDegree("o");
    setLetterF("F");
  };

  return (
    <div className='section'>
        <div className='container'>
            <div className="tempInput">
                <h2>Enter Temperature</h2>
                <div className="DegInput">
                    <div>Degree</div>
                    <input
                        type="text"
                        onChange={e=>setCelsius(e.target.value)}
                    />
                    <select>
                        <option><span>o</span>C</option>
                    </select>
                </div>
                <div className="FahrenInput">
                    <div>Convert in</div>
                    <select>
                        <option>Fahrenheit (<span>o</span>F)</option>
                    </select>
                </div>
                <button onClick={handleCelsiusChange}>
                    Convert
                </button>
            </div>
            
            <div className='output'>
                <p>{fahrenheit} <span>{degree}</span>{letterF}</p>
            </div>
        </div>
    </div>
  );
};

export default TemperatureConverter;
