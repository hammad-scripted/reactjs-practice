import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  completeLocation: string;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
  title: {
    marginTop: 0,
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  row: {
    display: 'flex',
    gap: '15px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #cccccc',
    fontSize: '14px',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #cccccc',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical',
    minHeight: '80px',
    fontFamily: 'inherit',
  },
  error: {
    color: '#dc3545',
    fontSize: '12px',
    marginTop: '4px',
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
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log('Form Submitted Successfully:', data);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Advance Form</h1>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          {/* Name Row */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <input
                {...register('firstName', { required: 'First name is required' })}
                placeholder="First Name"
                type="text"
                style={styles.input}
              />
              {errors.firstName && (
                <span style={styles.error}>{errors.firstName.message}</span>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Last Name"
                type="text"
                style={styles.input}
              />
              {errors.lastName && (
                <span style={styles.error}>{errors.lastName.message}</span>
              )}
            </div>
          </div>

          {/* Email & Phone Row */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Invalid email format',
                  },
                })}
                placeholder="Email"
                type="email"
                style={styles.input}
              />
              {errors.email && (
                <span style={styles.error}>{errors.email.message}</span>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9+\s-]{7,15}$/,
                    message: 'Invalid phone number format',
                  },
                })}
                placeholder="Phone Number"
                type="tel"
                style={styles.input}
              />
              {errors.phone && (
                <span style={styles.error}>{errors.phone.message}</span>
              )}
            </div>
          </div>

          {/* City & State Row */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <input
                {...register('city', { required: 'City is required' })}
                placeholder="City"
                type="text"
                style={styles.input}
              />
              {errors.city && (
                <span style={styles.error}>{errors.city.message}</span>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <input
                {...register('state', { required: 'State is required' })}
                placeholder="State"
                type="text"
                style={styles.input}
              />
              {errors.state && (
                <span style={styles.error}>{errors.state.message}</span>
              )}
            </div>
          </div>

          {/* Zip & Country Row */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <input
                {...register('zip', { required: 'ZIP code is required' })}
                placeholder="ZIP / Postal Code"
                type="text"
                style={styles.input}
              />
              {errors.zip && (
                <span style={styles.error}>{errors.zip.message}</span>
              )}
            </div>

            <div style={styles.fieldGroup}>
              <input
                {...register('country', { required: 'Country is required' })}
                placeholder="Country"
                type="text"
                style={styles.input}
              />
              {errors.country && (
                <span style={styles.error}>{errors.country.message}</span>
              )}
            </div>
          </div>

          {/* Complete Location Field */}
          <div style={styles.fieldGroup}>
            <textarea
              {...register('completeLocation', {
                required: 'Complete location details are required',
              })}
              placeholder="Complete Location (Street Address, Building, Suite, etc.)"
              style={styles.textarea}
            />
            {errors.completeLocation && (
              <span style={styles.error}>
                {errors.completeLocation.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
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
    </div>
  );
};

export default Form;