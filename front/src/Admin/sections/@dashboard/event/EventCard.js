import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Grid,
  Card,
  Link,
  Typography,
  Popover,
  MenuItem,
  TableCell,
  IconButton,
  CardContent,
} from "@mui/material";

// utils
import Iconify from "../../../components/iconify";
import { fDate } from "../../.../../../utils/formatTime";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";
// ----------------------------------------------------------------------

const StyledCardMedia = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

EventCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function EventCard({ post, index }) {
  const { cover, name, date, eventLink } = post;
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
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ position: "relative" }}>
          <TableCell align='right'>
            <IconButton size='' color='info' onClick={handleOpenMenu}>
              <Iconify icon={"eva:more-vertical-fill"} />
            </IconButton>
          </TableCell>
          <StyledCardMedia
            sx={{
              ...{
                pt: "calc(100% * 4 / 3)",
                "&:after": {
                  top: 0,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                },
              },
              ...{
                pt: {
                  xs: "calc(100% * 4 / 3)",
                  sm: "calc(100% * 3 / 4.66)",
                },
              },
            }}
          >
            <StyledCover alt={name} src={cover} />
          </StyledCardMedia>

          <CardContent
            sx={{
              pt: 4,
              ...{
                bottom: 0,
                width: "100%",
                position: "absolute",
              },
            }}
          >
            <Typography
              gutterBottom
              variant='caption'
              sx={{ color: "text.disabled", display: "block" }}
            >
              {fDate(date)}
            </Typography>

            <StyledTitle
              color='inherit'
              variant='subtitle2'
              underline='hover'
              href={eventLink}
              target='_blank'
              sx={{
                ...{ typography: "h5", height: 60 },
                ...{
                  color: "common.white",
                },
              }}
            >
              {name}
            </StyledTitle>
          </CardContent>
        </Card>
      </Grid>

      <>
        <EditEvent
          open={openModal.showEdit}
          handleClose={handleClose}
          event={post}
        />
        <DeleteEvent
          open={openModal.showDelete}
          handleClose={handleClose}
          event={post}
        />
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "bottom", horizontal: "right" }}
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
    </>
  );
}
