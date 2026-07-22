import React from 'react';

const IndianPlayers = () => {
  // Let's declare some Indian players to destructure
  const players = ['Dhoni', 'Sachin', 'Sehwag', 'Yuvraj', 'Raina', 'Zaheer'];
  
  // Destructuring features of ES6
  const [first, second, third, fourth, fifth, sixth] = players;
  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // Merge feature of ES6 (Spread Operator)
  const T20players = ['Hardik', 'Suryakumar', 'Bumrah'];
  const RanjiTrophy = ['Pujara', 'Sarfaraz', 'Hanuma'];
  
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ color: '#2b6cb0', borderBottom: '2px solid #2b6cb0', paddingBottom: '8px' }}>
        Indian Players Destructuring (Odd / Even Team)
      </h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0' }}>
        <div style={{
          flex: 1,
          maxWidth: '220px',
          backgroundColor: '#ebf8ff',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #bee3f8'
        }}>
          <h3 style={{ color: '#2b6cb0', fontSize: '18px', marginTop: 0 }}>Odd Team Players</h3>
          <ul style={{ paddingLeft: '20px', color: '#2d3748', margin: 0 }}>
            {oddTeam.map((player, idx) => (
              <li key={idx} style={{ margin: '5px 0' }}>{player}</li>
            ))}
          </ul>
        </div>
        <div style={{
          flex: 1,
          maxWidth: '220px',
          backgroundColor: '#fffaf0',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #feebc8'
        }}>
          <h3 style={{ color: '#dd6b20', fontSize: '18px', marginTop: 0 }}>Even Team Players</h3>
          <ul style={{ paddingLeft: '20px', color: '#2d3748', margin: 0 }}>
            {evenTeam.map((player, idx) => (
              <li key={idx} style={{ margin: '5px 0' }}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #2b6cb0', paddingBottom: '8px', marginTop: '30px' }}>
        Merged Players (T20 & Ranji Trophy)
      </h2>
      <div style={{
        margin: '15px 0',
        padding: '15px',
        backgroundColor: '#f7fafc',
        borderRadius: '8px',
        border: '1px solid #edf2f7',
        maxWidth: '470px'
      }}>
        <p style={{ color: '#718096', fontSize: '14px', marginTop: 0, marginBottom: '12px' }}>
          Merged using ES6 Spread Operator (<code>[...T20players, ...RanjiTrophy]</code>):
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {mergedPlayers.map((player, idx) => (
            <span key={idx} style={{
              backgroundColor: '#edf2f7',
              color: '#4a5568',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #e2e8f0'
            }}>
              {player}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;
