"use client"

import React, { useState, useEffect } from 'react';
import { ProfileForm } from './ProfileForm';
import { DatasetForm } from './DatasetForm';
import { SolarDataTable, SolarData} from './SolarDataTable';

const Setup = (globe_latitude, globe_longitude) => {
  const [datasetOptions, setDatasetOptions] = useState<string[]>([]);
  const [years, setYears] = useState<string[][]>([]);
  const [intervals, setIntervals] = useState<string[][]>([]);
  const [apiKey_selected, setApikey] = useState<string>('');
  const [latitude_selected, setLatitude] = useState<string>('');
  const [longitude_selected, setLongitude] = useState<string>('');
  const [urls, setUrls] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');
  const [loading, setIsLoading] = useState(false);
  const [solarData, setSolarData] = useState<SolarData[]>([]);

  useEffect(() => {
    if (globe_latitude && globe_longitude) {
      setLatitude(globe_latitude);
      setLongitude(globe_longitude);
    }
  }, [globe_latitude, globe_longitude]);

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
    setIsLoading(true);

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
        setIsLoading(false);
        const { data, dataset_options, years, intervals, download_url } = responseData;

        setDatasetOptions(dataset_options);
        setYears(years);
        setIntervals(intervals);
        setUrls(download_url);
        setEmail(email);
        
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  const handleDatasetFormSubmit = (data: {
    selectedDataset: string;
    selectedYears: string[];
    selectedIntervals: string[];
  }) => {
    const { selectedDataset, selectedYears, selectedIntervals } = data;
    setIsLoading(true);

    fetch('http://127.0.0.1:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        years: selectedYears,
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
        setIsLoading(false);
        // Set the solar data for rendering in the table
        setSolarData(responseData);
      })
      .catch((error) => {
        console.error('YOU MESSED UP:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full px-4 py-2">
      {datasetOptions.length === 0 ? (
        <ProfileForm 
        onSubmit={handleProfileFormSubmit} 
        defaultLatitude ={globe_latitude} 
        defaultLongitude ={globe_longitude}
        loading = {loading}
        />
      ) : (
        solarData.length > 0 ? (
          <SolarDataTable data={solarData} />
        ) : (
          <DatasetForm
            onSubmit={handleDatasetFormSubmit}
            datasetOptions={datasetOptions}
            years={years}
            intervals={intervals}
            loading={loading}
          />
        )
      )}
    </div>
  );
};

export default Setup;