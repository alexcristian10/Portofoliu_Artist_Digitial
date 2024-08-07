// src/SubmitForm.js
import React, { useState } from 'react';
import { postData } from './AxiosService';

const SubmitForm = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await postData('/submit', { data: input }); // Înlocuiește '/submit' cu ruta API reală
      setResponse(result);
      setError(null); // Resetează eroarea în caz de succes
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Failed to submit data'); // Setează mesaj de eroare
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
      {response && <pre>Response: {JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SubmitForm;
