import React from 'react';
import { useForm,  type SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
  },
  button: {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: '#dc3545',
    fontSize: '12px',
    marginTop: '-8px',
  },
};

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <input
          {...register('name', { required: true, minLength: 5, maxLength: 10 })}
          type="text"
          placeholder="Name"
          style={styles.input}
        />
        {errors.name && (
          <span style={styles.error}>Name is required (5-10 characters)</span>
        )}

        <input
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          type="email"
          placeholder="Email"
          style={styles.input}
        />
        {errors.email && (
          <span style={styles.error}>Invalid email format</span>
        )}

        <input
          {...register('password', { required: true, minLength: 8 })}
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        {errors.password && (
          <span style={styles.error}>Password must be at least 8 characters</span>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            ...styles.button,
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default App;