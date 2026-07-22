import React from 'react';

function App() {
  // Title element created using JSX
  const heading = (
    <h1 style={{
      textAlign: 'center',
      color: '#1a202c',
      margin: '0 0 40px 0',
      fontSize: '28px',
      fontWeight: '700'
    }}>
      Office Space Rental Directory
    </h1>
  );

  // Office details object
  const featuredOffice = {
    name: 'Premium Corporate Suite',
    rent: 75000,
    address: 'Block C, Tech Park, Bangalore',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  };

  // List of office space objects
  const officeSpaces = [
    {
      name: 'Co-Working Desk Space',
      rent: 45000,
      address: 'Suite 101, MG Road, Pune',
      image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Executive Private Office',
      rent: 95000,
      address: 'Level 5, Cyber Towers, Hyderabad',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Startup Shared Office',
      rent: 55000,
      address: 'Indiranagar Main Road, Bangalore',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Corporate Hub Suite',
      rent: 120000,
      address: 'Sector 62, Noida, Delhi NCR',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f7fafc',
      padding: '40px 20px',
      minHeight: '100vh'
    }}>
      {heading}

      {/* Featured Office Space Component */}
      <div style={{
        maxWidth: '750px',
        margin: '0 auto 40px auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <h2 style={{
          backgroundColor: '#3182ce',
          color: '#ffffff',
          margin: 0,
          padding: '16px 24px',
          fontSize: '20px',
          fontWeight: '600'
        }}>
          Featured Office Space
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <img
            src={featuredOffice.image}
            alt={featuredOffice.name}
            style={{
              width: '100%',
              maxWidth: '320px',
              height: '220px',
              objectFit: 'cover'
            }}
          />
          <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '20px' }}>
              {featuredOffice.name}
            </h3>
            <p style={{ margin: '6px 0', color: '#718096', fontSize: '15px' }}>
              <b>Address:</b> {featuredOffice.address}
            </p>
            <p style={{ margin: '15px 0 0 0', fontSize: '18px' }}>
              <b>Rent:</b>{' '}
              <span style={{
                color: featuredOffice.rent < 60000 ? 'red' : 'green',
                fontWeight: '700'
              }}>
                ₹{featuredOffice.rent.toLocaleString()} / month
              </span>
            </p>
          </div>
        </div>
      </div>

      <h2 style={{
        textAlign: 'center',
        color: '#2d3748',
        margin: '50px 0 25px 0',
        fontSize: '22px',
        fontWeight: '600'
      }}>
        All Office Space Listings
      </h2>

      {/* Grid Loop of Office Spaces */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {officeSpaces.map((office, index) => (
          <div key={index} style={{
            width: '270px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img
              src={office.image}
              alt={office.name}
              style={{
                width: '100%',
                height: '170px',
                objectFit: 'cover'
              }}
            />
            <div style={{
              padding: '16px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: '0 0 8px 0', color: '#2d3748', fontSize: '16px', fontWeight: '600' }}>
                  {office.name}
                </h3>
                <p style={{ margin: '0', color: '#718096', fontSize: '13px', lineHeight: '1.4' }}>
                  {office.address}
                </p>
              </div>
              <p style={{ margin: '15px 0 0 0', fontSize: '15px' }}>
                <b>Rent:</b>{' '}
                <span style={{
                  color: office.rent < 60000 ? 'red' : 'green',
                  fontWeight: '700'
                }}>
                  ₹{office.rent.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
