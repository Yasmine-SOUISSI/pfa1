import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @mui
import {
  Button,
  Container,
  InputAdornment,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
// components
import { getSessions } from "../../Redux/actions/sessionsActions";
// mock
import { applyFilter } from "../utils/helper";
import { StyledSearch } from "../sections/@dashboard/user/UserListToolbar";
import { SessionList, AddSession } from "../sections/@dashboard/sessions";
import Iconify from "../components/iconify";

// ----------------------------------------------------------------------

export default function SessionsPage() {
  const [open, setOpen] = useState(false);
  const [filterName, setFilterName] = useState("");
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.sessionsReducer.sessions);
  useEffect(() => {
    dispatch(getSessions(dispatch));
  }, [dispatch]);
  const filteredSessions = applyFilter(sessions, filterName);
  const isNotFound = !filteredSessions.length && !!filterName;

  return (
    <>
      <Helmet>
        <title>Sessions</title>
      </Helmet>
      <AddSession open={open} handleClose={handleClose} />
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={5}
        >
          <Typography variant='h4' gutterBottom>
            Sessions
          </Typography>
          <Button
            variant='contained'
            startIcon={<Iconify icon='eva:plus-fill' />}
            onClick={() => handleOpen()}
          >
            Add session
          </Button>
        </Stack>

        <Stack mb={5}>
          <StyledSearch
            value={filterName}
            onChange={handleFilterByName}
            placeholder='Search session...'
            startAdornment={
              <InputAdornment position='start'>
                <Iconify
                  icon='eva:search-fill'
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />
        </Stack>

        {isNotFound && (
          <Paper
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant='h6' paragraph>
              Not found
            </Typography>

            <Typography variant='body2'>
              No results found for &nbsp;
              <strong>&quot;{filterName}&quot;</strong>.
              <br /> Try checking for typos or using complete words.
            </Typography>
          </Paper>
        )}
        <SessionList sessions={filteredSessions} />
      </Container>
    </>
  );
}
