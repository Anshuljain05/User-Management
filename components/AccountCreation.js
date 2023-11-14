import { useEffect, useState } from 'react';
import axios from 'axios';

const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username && password) {
      try {
        const response = await axios.post('/api/users', {
          username,
          password,
        });

        // Handle the response from the server
        console.log(response.data);
        
        setIsSuccess(true);

        // Clear the form inputs
        setUsername('');
        setPassword('');
        setIsFormValid(false);
        
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    setIsFormValid(username && password);
  };

  return (
    <div className="account-creation">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <input
          type="submit"
          disabled={!isFormValid}
          value="Create Account"
          style={{
            backgroundColor: isFormValid ? '#0070f3' : 'inherit',
            color: isFormValid ? 'white' : 'black',
            padding: '10px 20px',
            cursor: isFormValid ? 'pointer': 'auto',
          }}
        />
      </form>

      {/* Render the success notification and close button */}
      {isSuccess && (
        <div className="success-notification">
          Account created successfully!
        </div>
      )}
    </div>
  );
};

export default AccountCreation;