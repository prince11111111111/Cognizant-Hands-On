import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'ADM23JA001',
      technology: 'Java Full Stack',
      startDate: '10-May-2026',
      endDate: '20-Aug-2026',
      status: 'ongoing'
    },
    {
      name: 'ADM23ME002',
      technology: 'MERN Stack Development',
      startDate: '01-Apr-2026',
      endDate: '15-Jul-2026',
      status: 'completed'
    },
    {
      name: 'ADM23PY003',
      technology: 'Python for Data Science',
      startDate: '15-Jun-2026',
      endDate: '30-Sep-2026',
      status: 'ongoing'
    },
    {
      name: 'ADM23CS004',
      technology: 'Cyber Security Essentials',
      startDate: '10-Jan-2026',
      endDate: '25-Apr-2026',
      status: 'completed'
    }
  ];

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2b2b2b',
        marginBottom: '40px',
        fontWeight: '600'
      }}>
        Academy Cohorts Dashboard
      </h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
