import React, { useState } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Counter mutation method
  const increment = () => {
    setCounter(prevCount => prevCount + 1);
  };

  // Static message greeting method
  const greet = () => {
    alert('Hello! Welcome to the Counter App.');
  };

  // Multiple methods handler triggered by the Increment click event
  const handleIncrement = () => {
    increment();
    greet();
  };

  // Decrement handler
  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  // Function with arguments
  const displayGreeting = (message) => {
    alert(`Greeting message argument passed: "${message}"`);
  };

  // Synthetic event handler
  const handleSyntheticClick = (e) => {
    alert(`Synthetic Event triggered! Event type: "${e.type}". Message: I was clicked`);
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f7fafc',
      minHeight: '80vh',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#1a365d',
        margin: '0 0 35px 0',
        fontWeight: '700'
      }}>
        React Event Handling Workspace
      </h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center'
      }}>
        {/* Event Examples Card */}
        <div style={{
          flex: 1,
          minWidth: '320px',
          backgroundColor: '#ffffff',
          padding: '24px',
          borderRadius: '10px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
        }}>
          <h2 style={{
            color: '#2d3748',
            fontSize: '18px',
            marginTop: 0,
            marginBottom: '20px',
            borderBottom: '2px solid #edf2f7',
            paddingBottom: '10px',
            fontWeight: '600'
          }}>
            Interactive Event Counters
          </h2>

          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <p style={{ margin: '0 0 8px 0', color: '#718096', fontSize: '15px' }}>Counter State</p>
            <div style={{ fontSize: '38px', fontWeight: '700', color: '#3182ce', margin: '10px 0 20px 0' }}>
              {counter}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={handleIncrement}
                style={{
                  backgroundColor: '#38a169',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Increment Counter
              </button>
              <button
                onClick={handleDecrement}
                style={{
                  backgroundColor: '#e53e3e',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Decrement Counter
              </button>
            </div>
          </div>

          <hr style={{ border: 0, borderTop: '1px solid #edf2f7', margin: '25px 0' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => displayGreeting('welcome')}
              style={{
                backgroundColor: '#3182ce',
                color: '#ffffff',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              Say Welcome (Pass parameter)
            </button>
            <button
              onClick={handleSyntheticClick}
              style={{
                backgroundColor: '#4a5568',
                color: '#ffffff',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              OnPress (Synthetic Click event)
            </button>
          </div>
        </div>

        {/* Currency Converter Card */}
        <div style={{ flex: 1, minWidth: '320px' }}>
          <CurrencyConvertor />
        </div>
      </div>
    </div>
  );
}

export default App;
