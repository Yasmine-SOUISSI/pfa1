import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  Popover,
  MenuItem,
  TableCell,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "../../../components/iconify";
import EditSession from "./EditSession";
import DeleteSession from "./DeleteSession";

// ----------------------------------------------------------------------

const SessionImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

SessionCard.propTypes = {
  session: PropTypes.object,
};

export default function SessionCard({ session }) {
  const { name, cover, sessionLink, department } = session;
  const [open, setOpen] = useState(null);
  const [openModal, setOpenModal] = useState({
    showEdit: false,
    showDelete: false,
  });
  const handleClose = () => setOpenModal(false);
  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(null);
  const handleOpen = (action) =>
    setOpenModal({
      ...openModal,
      [`show${action}`]: true,
    });
  return (
    <>
      <Card>
        <Box sx={{ pt: "100%", position: "relative" }}>
          <SessionImg alt={name} src={cover} />
          <TableCell align='right'>
            <IconButton size='small' onClick={handleOpenMenu}>
              <Iconify icon={"eva:more-vertical-fill"} />
            </IconButton>
          </TableCell>
        </Box>
        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography
            noWrap
            gutterBottom
            variant='caption'
            sx={{ color: "text.disabled", display: "block" }}
          >
            Department : {department}
          </Typography>
          <Link
            color='inherit'
            underline='hover'
            href={sessionLink}
            target='_blank'
          >
            <Typography variant='subtitle2' noWrap>
              {name}
            </Typography>
          </Link>
        </Stack>
      </Card>

      <EditSession
        open={openModal.showEdit}
        handleClose={handleClose}
        session={session}
      />
      <DeleteSession
        open={openModal.showDelete}
        handleClose={handleClose}
        session={session}
      />
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
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
