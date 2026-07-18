import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, goal }) => {
  const calculateAverage = (totalMarks, goalMarks) => {
    const t = parseFloat(totalMarks);
    const g = parseFloat(goalMarks);
    if (isNaN(t) || isNaN(g) || g === 0) return 0;
    return ((t / g) * 100).toFixed(2);
  };

  return (
    <div className="formatstyle">
      <h1>Student Score Details</h1>
      <div className="detailstyle">
        <p><b>Name:</b> {Name}</p>
        <p><b>School:</b> {School}</p>
        <p><b>Total Marks:</b> {Total}</p>
        <p><b>Goal Marks:</b> {goal}</p>
        <p><b>Average Score:</b> {calculateAverage(Total, goal)}%</p>
      </div>
    </div>
  );
};

export default CalculateScore;
