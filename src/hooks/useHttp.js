import { useState, useCallback } from 'react';

const useHttp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Upsss! Could not fetch data...');
      }
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong...');
    }
  }, []);

  return [data, sendRequest, isLoading, error];
};

export default useHttp;
