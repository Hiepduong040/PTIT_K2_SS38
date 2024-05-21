import React, { useState, useCallback } from 'react';

const LoginForm = () => {
  // State để lưu trữ giá trị của các trường đầu vào
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý khi người dùng nhấn nút "Submit"
  const handleSubmit = useCallback(() => {
    console.log('Email:', email);
    console.log('Password:', password);
  }, [email, password]);

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
