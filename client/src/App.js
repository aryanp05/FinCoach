// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './components/homepage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
