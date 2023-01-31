import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import { getUsers } from "../../Redux/actions/userActions";
import { applySortFilter, getComparator } from "../utils/helper";
import EditUser from "../sections/@dashboard/user/EditUser";
import DeleteUser from "../sections/@dashboard/user/DeleteUser";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
// sections
import { UserListHead, UserListToolbar } from "../sections/@dashboard/user";

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "department", label: "Department", alignRight: false },
  { id: "phoneNumber", label: "Phone number", alignRight: false },
  { id: "" },
];

export default function UserPage() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [openModal, setOpenModal] = useState({
    showEdit: false,
    showDelete: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);

  const handleOpen = (action) =>
    setOpenModal({
      ...openModal,
      [`show${action}`]: true,
    });
  const handleClose = () => setOpenModal(false);
  const handleOpenMenu = (event) => setOpen(event.currentTarget);
  const handleCloseMenu = () => setOpen(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  useEffect(() => {
    dispatch(getUsers(dispatch));
  }, [dispatch]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const filteredUsers = applySortFilter(
    users,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;
  console.log(
    filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  return (
    <>
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={5}
        >
          <Typography variant='h4' gutterBottom>
            Users
          </Typography>
          <Button
            variant='contained'
            startIcon={<Iconify icon='eva:plus-fill' />}
            onClick={() => navigate("/newUser")}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  onRequestSort={handleRequestSort}
                />
                {
                  <TableBody>
                    {filteredUsers
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        const {
                          _id,
                          firstname,
                          lastname,
                          department,
                          avatarUrl,
                          phoneNumber,
                        } = row;

                        return (
                          <TableRow hover key={_id} tabIndex={-1}>
                            <TableCell padding='checkbox' />

                            <TableCell
                              component='th'
                              scope='row'
                              padding='none'
                            >
                              <Stack
                                direction='row'
                                alignItems='center'
                                spacing={2}
                              >
                                <Avatar alt={firstname} src={avatarUrl} />
                                <Typography variant='subtitle2' noWrap>
                                  {firstname} {lastname}
                                </Typography>
                              </Stack>
                            </TableCell>

                            <TableCell align='left'>{department}</TableCell>

                            <TableCell align='left'>{phoneNumber}</TableCell>

                            <TableCell align='right'>
                              <IconButton
                                size='large'
                                color='inherit'
                                onClick={handleOpenMenu}
                              >
                                <Iconify icon={"eva:more-vertical-fill"} />
                              </IconButton>
                            </TableCell>
                            <EditUser
                              open={openModal.showEdit}
                              handleClose={handleClose}
                              user={row}
                            />
                            <DeleteUser
                              open={openModal.showDelete}
                              handleClose={handleClose}
                              user={row}
                            />
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                }

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align='center' colSpan={6} sx={{ py: 3 }}>
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
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[6, 10, 25]}
            component='div'
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleOpen("Edit")}>
          <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem
          sx={{ color: "error.main" }}
          onClick={() => handleOpen("Delete")}
        >
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
