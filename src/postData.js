// src/SubmitForm.js
import React, { useState } from 'react';
import { postData } from './AxiosService';

const SubmitForm = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await postData('/api/submit', { data: input }); // Înlocuiește '/endpoint' cu ruta API reală
      setResponse(result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h2>Submit Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter data"
        />
        <button type="submit">Submit</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default SubmitForm;
