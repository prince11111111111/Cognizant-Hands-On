import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2018 },
    { id: 2, title: 'You Don\'t Know JS Yet', author: 'Kyle Simpson', year: 2020 },
    { id: 3, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 }
  ];

  return (
    <div style={{ padding: '15px 0' }}>
      <h3 style={{ color: '#2b6cb0', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
        Recommended Programming Books
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
        {books.map(book => (
          <div key={book.id} style={{
            padding: '15px',
            backgroundColor: '#f7fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px'
          }}>
            <h4 style={{ margin: '0 0 6px 0', color: '#2d3748' }}>{book.title}</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#718096' }}>
              Written by <strong>{book.author}</strong> in {book.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
