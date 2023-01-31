import { Helmet } from 'react-helmet-async';
// @mui
import { CardMedia, Container, Typography } from '@mui/material';
import Bardo from './Bardo.jpg';
// sections

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  return (
    <>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <CardMedia
          component="img"
          image={Bardo}
          height="600"
          alt="random"
        />
      </Container>
    </>
  );
}
