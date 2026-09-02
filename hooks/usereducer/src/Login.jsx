import React, { useReducer } from 'react';

const initialState = { user: null, loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, user: null, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, loading: false, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, user: null, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, loading: false, error: null };
    default:
      return state;
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleLogin(e) {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  }

  // Styles Object
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '32px',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      margin: '0 0 24px 0',
      color: '#0f172a',
      fontSize: '24px',
      fontWeight: '700',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '16px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#475569',
      marginBottom: '6px',
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      fontSize: '14px',
      borderRadius: '6px',
      border: '1px solid #cbd5e1',
      boxSizing: 'border-box',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '15px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: state.loading ? '#94a3b8' : '#2563eb',
      border: 'none',
      borderRadius: '6px',
      cursor: state.loading ? 'not-allowed' : 'pointer',
      marginTop: '8px',
      transition: 'background-color 0.2s',
    },
    errorBox: {
      backgroundColor: '#fef2f2',
      color: '#991b1b',
      border: '1px solid #fecaca',
      padding: '10px',
      borderRadius: '6px',
      fontSize: '14px',
      marginBottom: '16px',
    },
    userBox: {
      backgroundColor: '#f0fdf4',
      color: '#166534',
      border: '1px solid #bbf7d0',
      padding: '16px',
      borderRadius: '6px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        {state.user ? (
          <div style={styles.userBox}>
            <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>
              Logged in as {state.user.name}
            </p>
            <p style={{ margin: '0 0 16px 0', fontSize: '13px' }}>
              {state.user.email}
            </p>
            <button
              style={{ ...styles.button, backgroundColor: '#dc2626' }}
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              Log Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            {state.error && (
              <div style={styles.errorBox}>{state.error}</div>
            )}

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="user@example.com"
                defaultValue="user@example.com"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                defaultValue="password"
                style={styles.input}
                required
              />
            </div>

            <button
              type="submit"
              disabled={state.loading}
              style={styles.button}
            >
              {state.loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;