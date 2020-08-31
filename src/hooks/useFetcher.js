/* eslint-disable no-undef */
import { useState, useCallback } from 'react';

// eslint-disable-next-line no-unused-vars
const useFetcher = (type) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw response;
  };

  const json = (responseData) => {
    setData(responseData);
    setIsLoading(false);
  };
  const request = useCallback((url, requestData) => {
    setIsLoading(true);
    fetch(url, {
      method: type || 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(status)
      .then(json)
      .catch((responseError) => {
        setIsLoading(false);
        if (responseError.json) {
          responseError.json().then((errorMessage) => {
            setError(errorMessage.error);
          });
        } else {
          setError(responseError);
        }
      });
  }, [type]);

  return {
    data,
    request,
    isLoading,
    error,
  };
};

export default useFetcher;
