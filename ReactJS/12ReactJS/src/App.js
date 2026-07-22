import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Sample flight data
  const flights = [
    { id: 1, number: 'AI-101', origin: 'Delhi', destination: 'Mumbai', departure: '08:00 AM', price: 5500 },
    { id: 2, number: '6E-204', origin: 'Bangalore', destination: 'Delhi', departure: '11:30 AM', price: 6200 },
    { id: 3, number: 'SG-302', origin: 'Mumbai', destination: 'Goa', departure: '03:15 PM', price: 4100 },
    { id: 4, number: 'UK-811', origin: 'Kolkata', destination: 'Chennai', departure: '06:45 PM', price: 7800 }
  ];

  const handleBookTicket = (flightNumber) => {
    if (!bookings.includes(flightNumber)) {
      setBookings([...bookings, flightNumber]);
      alert(`Successfully booked ticket for flight ${flightNumber}!`);
    } else {
      alert(`You have already booked a ticket for flight ${flightNumber}.`);
    }
  };

  const handleCancelBooking = (flightNumber) => {
    setBookings(bookings.filter(number => number !== flightNumber));
    alert(`Cancelled booking for flight ${flightNumber}.`);
  };

  // Conditional Rendering elements using element variables
  let userDashboard;
  if (isLoggedIn) {
    userDashboard = (
      <div style={{
        backgroundColor: '#e6fffa',
        border: '1px solid #b2f5ea',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px',
        color: '#234e52'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>User Portal Dashboard</h2>
        <p style={{ margin: 0 }}>
          Welcome back! You are logged in as a registered user. You can now book flights from the listing below.
        </p>
        {bookings.length > 0 ? (
          <div style={{ marginTop: '15px' }}>
            <strong>Your Booked Flights:</strong>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
              {bookings.map((flight, idx) => (
                <li key={idx} style={{ margin: '4px 0' }}>
                  {flight}{' '}
                  <button
                    onClick={() => handleCancelBooking(flight)}
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#e53e3e',
                      color: 'white',
                      border: 'none',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel Booking
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '14px' }}>No active bookings yet.</p>
        )}
      </div>
    );
  } else {
    userDashboard = (
      <div style={{
        backgroundColor: '#ebf8ff',
        border: '1px solid #bee3f8',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px',
        color: '#2b6cb0'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Guest Portal</h2>
        <p style={{ margin: 0, fontSize: '15px' }}>
          You are currently browsing as a <strong>Guest</strong>. You can view all available flights below. To proceed with ticket bookings, please log in.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f7fafc',
      minHeight: '100vh',
      padding: '30px 20px'
    }}>
      <div style={{
        maxWidth: '850px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        border: '1px solid #e2e8f0'
      }}>
        {/* Navigation / Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #edf2f7',
          paddingBottom: '20px',
          marginBottom: '30px'
        }}>
          <h1 style={{ margin: 0, color: '#1a365d', fontSize: '24px', fontWeight: '700' }}>
            Flight Ticket Booking Portal
          </h1>
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
              if (isLoggedIn) setBookings([]); // Clear bookings on logout
            }}
            style={{
              backgroundColor: isLoggedIn ? '#e53e3e' : '#3182ce',
              color: '#ffffff',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'background-color 0.2s'
            }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Dynamic Element variable content */}
        {userDashboard}

        {/* Flight Listings */}
        <h2 style={{ color: '#2d3748', fontSize: '20px', marginBottom: '20px', fontWeight: '600' }}>
          Available Flights
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {flights.map((flight) => (
            <div key={flight.id} style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
              gap: '15px'
            }}>
              <div>
                <span style={{
                  backgroundColor: '#edf2f7',
                  color: '#4a5568',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  {flight.number}
                </span>
                <h3 style={{ margin: '10px 0 5px 0', color: '#2d3748', fontSize: '18px' }}>
                  {flight.origin} to {flight.destination}
                </h3>
                <p style={{ margin: 0, color: '#718096', fontSize: '13px' }}>
                  Departure: {flight.departure}
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#2d3748' }}>
                  ₹{flight.price.toLocaleString()}
                </span>
                {isLoggedIn ? (
                  <button
                    onClick={() => handleBookTicket(flight.number)}
                    disabled={bookings.includes(flight.number)}
                    style={{
                      backgroundColor: bookings.includes(flight.number) ? '#cbd5e0' : '#38a169',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 18px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: bookings.includes(flight.number) ? 'default' : 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    {bookings.includes(flight.number) ? 'Booked' : 'Book Ticket'}
                  </button>
                ) : (
                  <button
                    disabled
                    style={{
                      backgroundColor: '#e2e8f0',
                      color: '#a0aec0',
                      border: 'none',
                      padding: '10px 18px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '14px',
                      cursor: 'not-allowed'
                    }}
                  >
                    Login to Book
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
