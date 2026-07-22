import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState(null);

  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    const amount = parseFloat(inr);
    if (!isNaN(amount) && amount >= 0) {
      // Conversion rate: 1 EUR = 90 INR
      const result = amount / 90;
      setEur(result.toFixed(2));
    } else {
      alert('Please enter a valid positive number for Indian Rupees.');
    }
  };

  return (
    <div style={{
      maxWidth: '420px',
      margin: '20px auto',
      padding: '24px',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{
        margin: '0 0 20px 0',
        color: '#2b6cb0',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '600'
      }}>
        Currency Convertor (INR to EUR)
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#4a5568',
            fontSize: '14px'
          }}>
            Amount in Indian Rupees (INR):
          </label>
          <input
            type="number"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
            placeholder="e.g. 900"
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #cbd5e0',
              borderRadius: '6px',
              boxSizing: 'border-box',
              fontSize: '15px',
              outline: 'none'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#3182ce',
            color: '#ffffff',
            border: 'none',
            padding: '12px',
            borderRadius: '6px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '15px',
            transition: 'background-color 0.2s'
          }}
        >
          Convert
        </button>
      </form>
      {eur !== null && (
        <div style={{
          marginTop: '20px',
          padding: '14px',
          backgroundColor: '#e6fffa',
          border: '1px solid #b2f5ea',
          borderRadius: '6px',
          textAlign: 'center',
          color: '#234e52',
          fontSize: '15px',
          fontWeight: '500'
        }}>
          ₹{parseFloat(inr).toLocaleString()} INR = <strong style={{ color: '#0d9488', fontSize: '18px' }}>€{eur} EUR</strong>
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
