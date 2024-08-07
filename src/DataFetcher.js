// src/DataFetcher.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './AxiosService'; // Importă corect fetchData

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData('/endpoint'); // Înlocuiește '/endpoint' cu ruta API reală
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
