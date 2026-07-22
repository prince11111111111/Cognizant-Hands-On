import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 82 },
    { name: 'Rohit Sharma', score: 65 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Suryakumar Yadav', score: 112 },
    { name: 'Hardik Pandya', score: 78 },
    { name: 'Dinesh Karthik', score: 28 },
    { name: 'Axar Patel', score: 15 },
    { name: 'Ravichandran Ashwin', score: 32 },
    { name: 'Bhuvneshwar Kumar', score: 12 },
    { name: 'Mohammed Shami', score: 8 },
    { name: 'Arshdeep Singh', score: 4 }
  ];

  // Filter players with scores below 70 using arrow functions of ES6
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #2b6cb0', paddingBottom: '8px' }}>
        List of Players (Name & Score)
      </h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0, maxWidth: '450px' }}>
        {players.map((player, index) => (
          <li key={index} style={{
            padding: '10px 15px',
            margin: '6px 0',
            backgroundColor: '#f7fafc',
            border: '1px solid #edf2f7',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontWeight: '500', color: '#4a5568' }}>{player.name}</span>
            <span style={{
              fontWeight: '600',
              color: player.score >= 70 ? '#38a169' : '#e53e3e',
              backgroundColor: player.score >= 70 ? '#f0fff4' : '#fff5f5',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>{player.score}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ color: '#e53e3e', borderBottom: '2px solid #fc8181', paddingBottom: '8px', marginTop: '30px' }}>
        Players with Score Below 70
      </h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0, maxWidth: '450px' }}>
        {playersBelow70.map((player, index) => (
          <li key={index} style={{
            padding: '10px 15px',
            margin: '6px 0',
            backgroundColor: '#fff5f5',
            border: '1px solid #fed7d7',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#c53030'
          }}>
            <span style={{ fontWeight: '500' }}>{player.name}</span>
            <strong style={{ fontSize: '16px' }}>{player.score}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
