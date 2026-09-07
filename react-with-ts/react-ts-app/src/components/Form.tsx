import React from 'react';

type FormData = {
  name: string;
  email: string;
};

// Inline CSS Style Objects
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  displayBox: {
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
  },
  title: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '12px',
  },
  text: {
    fontSize: '14px',
    color: '#555',
    margin: '4px 0',
  },
};

const Form: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleFormChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleFormChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      <div style={styles.displayBox}>
        <h2 style={styles.title}>Current Form Input:</h2>
        <div>
          <p style={styles.text}>
            <strong>Name:</strong> {formData.name || 'N/A'}
          </p>
          <p style={styles.text}>
            <strong>Email:</strong> {formData.email || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;