import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Very simple validation
    if (!formData.email || !formData.password) {
      setError('Both fields are required!');
      return;
    }

    alert(`Logged in with\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    setFormData({ email: '', password: '' }); // Clear form after submit
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
