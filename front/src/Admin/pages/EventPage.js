import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @mui
import { Grid, Button, Container, InputAdornment, Stack, Typography, Paper } from '@mui/material';
// components
import { EventCard, AddEvent } from '../sections/@dashboard/event';
import { filterArr } from '../utils/helper';
import { StyledSearch } from '../sections/@dashboard/user/UserListToolbar';
import { getEvents } from '../../Redux/actions/eventsActions';
import Iconify from '../components/iconify';
// mock

export default function EventPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsReducer.events);
  const [filterName, setFilterName] = useState('');
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };
  useEffect(() => {
    dispatch(getEvents(dispatch));
  }, [dispatch]);
  const filteredEvent = filterArr(events, filterName);
  const isNotFound = !filteredEvent.length && !!filterName;

  return (
    <>
   
      <AddEvent open={open} handleClose={handleClose} />
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Events
          </Typography>
           <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpen}>
            New Post
          </Button>
        </Stack>
        <Stack mb={5}>
          <StyledSearch
            value={filterName}
            onChange={handleFilterByName}
            placeholder="Search event..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />
        </Stack>
        <Grid container spacing={3}>
          {filteredEvent.length > 0 && filteredEvent.map((post, key) => (
            <EventCard key={key} post={post} index={key} eventsLength={filteredEvent.length} />
          ))}
        </Grid>
        {isNotFound && (

          <Paper
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" paragraph>
              Not found
            </Typography>

            <Typography variant="body2">
              No results found for &nbsp;
              <strong>&quot;{filterName}&quot;</strong>.
              <br /> Try checking for typos or using complete words.
            </Typography>
          </Paper>
        )}
      </Container>
    </>
  );
}
