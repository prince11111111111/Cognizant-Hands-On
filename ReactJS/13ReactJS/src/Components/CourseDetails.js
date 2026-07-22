import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: 'Full-Stack JavaScript Development', duration: '12 Weeks', level: 'Intermediate' },
    { id: 2, name: 'React Native for Mobile Apps', duration: '6 Weeks', level: 'Advanced' },
    { id: 3, name: 'Web Design and UI Systems', duration: '4 Weeks', level: 'Beginner' }
  ];

  return (
    <div style={{ padding: '15px 0' }}>
      <h3 style={{ color: '#276749', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
        Available Academy Courses
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
        {courses.map(course => (
          <div key={course.id} style={{
            padding: '15px',
            backgroundColor: '#f0fff4',
            border: '1px solid #c6f6d5',
            borderRadius: '6px'
          }}>
            <h4 style={{ margin: '0 0 6px 0', color: '#2d3748' }}>{course.name}</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#718096' }}>
              Duration: <strong>{course.duration}</strong> | Complexity: <span style={{
                color: course.level === 'Advanced' ? '#e53e3e' : course.level === 'Intermediate' ? '#dd6b20' : '#3182ce',
                fontWeight: '600'
              }}>{course.level}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
