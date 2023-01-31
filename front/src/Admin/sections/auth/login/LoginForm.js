import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { login } from '../../../../Redux/actions/authActions';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [user, setUser] = useState({
    password: '',
    email: '',
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    dispatch(login(user, navigate, dispatch));
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack spacing={3}>
        <Box sx={{ pt: 2 }}>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
            Login
          </LoadingButton>
        </Box>
      </Stack>
    </>
  );
}
