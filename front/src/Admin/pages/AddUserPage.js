import { Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { AddUser } from '../sections/@dashboard/user';

export default function AddUserPage() {
  return (
    <>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Add new user
        </Typography>
        <AddUser />
      </Container>
    </>
  );
}
