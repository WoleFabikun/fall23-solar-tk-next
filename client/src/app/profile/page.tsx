import React, { useState, useEffect } from 'react';
import { ProfileForm } from '@/components/ProfileForm';
import { useRouter } from 'next/router';
import { useSearchParams } from "next/navigation";

const ProfilePage = (globe_latitude, globe_longitude) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  const [apiKey_selected, setApikey] = useState<string>('');
  const [latitude_selected, setLatitude] = useState<string>('');
  const [longitude_selected, setLongitude] = useState<string>('');
  const [loading, setIsLoading] = useState(false);


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

        router.push({
          pathname: '/options',
          query: {
            dataset_options,
            years,
            intervals,
            download_url,
            loading
          },
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <ProfileForm 
      onSubmit={handleProfileFormSubmit} 
      defaultLatitude={globe_latitude} 
      defaultLongitude={globe_longitude} 
      loading={false} />
    </div>
  );
};

export default ProfilePage;
