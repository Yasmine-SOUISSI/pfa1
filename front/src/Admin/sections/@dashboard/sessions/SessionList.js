import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import SessionCard from './SessionCard';

// ----------------------------------------------------------------------

SessionList.propTypes = {
  sessions: PropTypes.array.isRequired,
};

export default function SessionList({ sessions, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {sessions.map((session) => (
        <Grid key={session.id} item xs={12} sm={6} md={3}>
          <SessionCard session={session} />
        </Grid>
      ))}
    </Grid>
  );
}
