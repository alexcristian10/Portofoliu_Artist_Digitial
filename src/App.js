// src/App.js
import React from 'react';
import DataFetcher from './DataFetcher';
import SubmitForm from './SubmitForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-NestJS Integration</h1>
        <DataFetcher />
        <SubmitForm />
      </header>
    </div>
  );
}

export default App;
