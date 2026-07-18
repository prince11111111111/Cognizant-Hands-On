import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <CalculateScore 
        Name="Alice Johnson" 
        School="Cognizant Tech Academy" 
        Total={276} 
        goal={300} 
      />
    </div>
  );
}

export default App;
