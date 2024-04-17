"use client"

import React, { useState } from 'react';
import { InputWithButton } from './UserInput';
import axios from 'axios';

const Setup = () => {
  const [apikey, setApiKey] = useState('');
  const [email, setEmail] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setApiKey(event.target.value ?? '');
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value ?? '');
  };

  const handleLongitudeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLongitude(event.target.value ?? '');
  };

  const handleLatitudeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLatitude(event.target.value ?? '');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (): void => {
    setLoading(true);

    const data = {
      apikey,
      email,
      latitude,
      longitude,
    };

    axios.post('/get_available_datasets', data)
      .then(response => {
        const { dataset_options, years, intervals } = response.data;
        // Handle the response data, e.g., store it in state or navigate to the next page
        console.log('Dataset Options:', dataset_options);
        console.log('Years:', years);
        console.log('Intervals:', intervals);
      })
      .catch(error => {
        // Handle the error
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <InputWithButton
          value={apikey}
          onChange={handleNameInput}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          loading={loading}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <InputWithButton
          value={email}
          onChange={handleEmailInput}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          loading={loading}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <InputWithButton
          value={longitude}
          onChange={handleLongitudeInput}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          loading={loading}
          placeholder="Enter longitude"
        />
      </div>
      <div>
        <InputWithButton
          value={latitude}
          onChange={handleLatitudeInput}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          loading={loading}
          placeholder="Enter latitude"
        />
      </div>
    </div>
  );
};

export default Setup;