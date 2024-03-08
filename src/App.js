import React, { useState } from 'react';
import './App.css';
import microsoftLogo from './Microsoft_logo 1.png';
import googleLogo from './Group.png';
import backgroundImage from './Frame.svg';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from './Frame 1 (1).png'; // Path to your logo image

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
        <div style={{ textAlign: 'left', marginRight: '210px', marginBottom: '50px' }}>
          <h1>Welcome Back👏</h1>
          <typography >
            Sign in to your account
          </typography>
        </div>


        <form>
          <label className="required">Email</label>
          <TextField id="outlined-basic" variant="outlined" placeholder='Enter Your Email' />

          <label className="required">Password</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder='Enter Your Password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <a href="#" className="forgot-password">Forgot Password?</a> {/* Forgot Password link */}
          <button type="submit" id='signin'>Sign in</button>
        </form>

        <p style={{ color: '#D9D9D9', marginBottom: '20px', marginTop: '-10px' }}>
          ------------------------------------or------------------------------------
        </p>
        <Button variant="outlined" className="continue-with-microsoft"> <img src={microsoftLogo} alt="Google Logo" />
          Continue with Microsoft
        </Button>
        <Button variant="outlined" className="continue-with-google"> <img src={googleLogo} alt="Google Logo" />
          Continue with Google
        </Button>
      </div>
      <div className="right">
        <img src={backgroundImage} alt="Background" style={{
          width: '100%', height: '100%', backgroundSize: 'cover'
        }} />
      </div>
    </div>
  );
}

export default App;
