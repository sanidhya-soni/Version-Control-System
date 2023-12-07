// File: src/components/SimpleForm.js
import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', inputValue);
    // You can perform any other actions here with the input value
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;