// pages/data.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SolarDataTable, SolarData } from '@/components/SolarDataTable';

const DataPage = () => {
  const router = useRouter();
  const { apiKey, email, latitude, longitude, selectedDataset, selectedYears, selectedIntervals } = router.query;
  const [solarData, setSolarData] = useState<SolarData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!apiKey || !email || !latitude || !longitude || !selectedDataset || !selectedYears || !selectedIntervals) {
      // Redirect back if any data is missing
      router.push('/profile');
      return;
    }

    setLoading(true);
    fetch('http://127.0.0.1:5000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        latitude: parseFloat(latitude as string),
        longitude: parseFloat(longitude as string),
        years: selectedYears,
        urls: [], // Update this based on actual data requirements
        email
      })
    })
    .then(response => response.json())
    .then(data => {
      setSolarData(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Failed to load solar data:', error);
      setLoading(false);
    });
  }, [apiKey, email, latitude, longitude, selectedDataset, selectedYears, selectedIntervals, router]);

  return (
    <div className="container">
      {loading ? <p>Loading data...</p> : <SolarDataTable data={solarData} />}
    </div>
  );
};

export default DataPage;
