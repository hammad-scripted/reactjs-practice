import React, { useState, useEffect } from 'react';

const App = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUserProfile() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = await response.json();
      setData((prevData) => [...prevData, user]);
    }

    fetchUserProfile();
  }, [id]);

  // Inline Style Objects
  const styles = {
    container: {
      maxWidth: '500px',
      margin: '40px auto',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '16px',
      borderBottom: '2px solid #e2e8f0',
    },
    title: {
      margin: 0,
      fontSize: '20px',
      color: '#1e293b',
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      padding: '10px 18px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '14px',
    },
    userCard: {
      backgroundColor: '#ffffff',
      padding: '12px 16px',
      borderRadius: '8px',
      marginBottom: '10px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    userName: {
      margin: '0 0 4px 0',
      fontWeight: '600',
      color: '#0f172a',
    },
    userDetails: {
      margin: 0,
      fontSize: '14px',
      color: '#64748b',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.title}>User ID: {id}</h1>
        <button
          style={styles.button}
          onClick={() => setId(id + 1)}
        >
          Next User
        </button>
      </div>

      <div>
        {data.map((user) => (
          <div key={user.id} style={styles.userCard}>
            <p style={styles.userName}>{user.name}</p>
            <p style={styles.userDetails}>
              @{user.username} • {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;