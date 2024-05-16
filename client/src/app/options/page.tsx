// pages/dataset.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DatasetForm } from '@/components/DatasetForm';

const DatasetPage = () => {
  const router = useRouter();
  const { apiKey, email, latitude, longitude } = router.query;
  const [datasetOptions, setDatasetOptions] = useState<string[]>([]);
  const [years, setYears] = useState<string[][]>([]);
  const [intervals, setIntervals] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!apiKey || !email || !latitude || !longitude) {
      // Redirect back to profile page if required data is missing
      router.push('/profile');
      return;
    }

    setLoading(true);
    fetch('http://127.0.0.1:5000/get_available_datasets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apikey: apiKey, email, latitude, longitude })
    })
    .then(response => response.json())
    .then(data => {
      setDatasetOptions(data.dataset_options);
      setYears(data.years);
      setIntervals(data.intervals);
      setLoading(false);
    })
    .catch(error => {
      console.error('Failed to fetch datasets:', error);
      setLoading(false);
    });
  }, [apiKey, email, latitude, longitude, router]);

  const handleDatasetFormSubmit = (data) => {
    // Redirect to the data view page with the necessary information
    router.push({
      pathname: '/data',
      query: { ...router.query, ...data },
    });
  };

  return (
    <div className="container">
      <DatasetForm
        onSubmit={handleDatasetFormSubmit}
        datasetOptions={datasetOptions}
        years={years}
        intervals={intervals}
        loading={loading}
      />
    </div>
  );
};

export default DatasetPage;
