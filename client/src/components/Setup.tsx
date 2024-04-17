"use client"

import React, { useState } from 'react';
import { ProfileForm } from './ProfileForm';
import { DatasetForm } from './DatasetForm';

const Setup = () => {
  const [datasetOptions, setDatasetOptions] = useState<string[]>([]);
  const [years, setYears] = useState<string[][]>([]);
  const [intervals, setIntervals] = useState<string[][]>([]);
  const [apiKey_selected, setApikey] = useState<string>('');
  const [latitude_selected, setLatitude] = useState<string>('');
  const [longitude_selected, setLongitude] = useState<string>('');
  const [urls, setUrls] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');

  const handleProfileFormSubmit = (data: {
    apiKey: string;
    email: string;
    latitude: string;
    longitude: string;
  }) => {
    const { apiKey, email, latitude, longitude } = data;

    // Handle the form submission
    console.log('Form submitted with data:', data);

    setApikey(apiKey);
    setLatitude(latitude);
    setLongitude(longitude);

    // Make the API request to the Python backend
    fetch('http://127.0.0.1:5000/get_available_datasets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "apikey": apiKey,
        "email": email,
        "latitude": latitude,
        "longitude": longitude,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        const { data, dataset_options, years, intervals, download_url } = responseData;
        console.log('Dataset Options:', dataset_options);
        console.log('Years:', years);
        console.log('Intervals:', intervals);
        console.log('RESPONSE:', data)
        console.log('Download URLs:', download_url)

        setDatasetOptions(dataset_options);
        setYears(years);
        setIntervals(intervals);
        setUrls(download_url);
        setEmail(email);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDatasetFormSubmit = (data: {
    selectedDataset: string;
    selectedYears: string[];
    selectedIntervals: string[];
  }) => {
    const { selectedDataset, selectedYears, selectedIntervals } = data;

    fetch('http://127.0.0.1:5000/run_script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dataset: selectedDataset,
        years: selectedYears,
        intervals: selectedIntervals,
        api_key: apiKey_selected,
        latitude: parseFloat(latitude_selected),
        longitude: parseFloat(longitude_selected),
        urls: urls,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Response:', responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {datasetOptions.length === 0 ? (
        <ProfileForm onSubmit={handleProfileFormSubmit} />
      ) : (
        <DatasetForm
          onSubmit={handleDatasetFormSubmit}
          datasetOptions={datasetOptions}
          years={years}
          intervals={intervals}
        />
      )}
    </div>
  );
};

export default Setup;