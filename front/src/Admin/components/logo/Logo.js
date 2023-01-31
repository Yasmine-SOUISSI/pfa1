import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ sx }) => {
  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      <Box component="img" src="/logo/logo_single.svg" sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }} />
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
};

export default Logo;
