import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fDate } from "../../../utils/formatTime";
import {
  Grid,
  Card,
  Typography,
  Popover,
  MenuItem,
  Button,
  TableCell,
  IconButton,
  CardContent,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Iconify from "../../../components/iconify";
import EditBlog from "./EditBlog";
import DeleteBlog from "./DeleteBlog";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(null);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = (action) =>
    setOpenModal({
      ...openModal,
      [`show${action}`]: true,
    });
  return (
    <>
      <Grid item key={blog} xs={10} sm={6}>
        <Card
          sx={{
            width: "500",
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
          }}
        >
          <CardMedia
            component='img'
            image={blog.photo}
            height='194'
            alt='random'
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant='h5'>
              {blog.title}
            </Typography>
            <Typography
              gutterBottom
              variant='caption'
              sx={{ color: "text.disabled", display: "block" }}
            >
              {fDate(blog.date)}
            </Typography>
            <Typography>{blog.description.slice(0, 320)}...</Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              onClick={() => navigate(`/${blog._id}`)}
            >
              View more
            </Button>
            <TableCell align='right'>
              <IconButton size='' color='inherit' onClick={handleOpenMenu}>
                <Iconify icon={"eva:more-vertical-fill"} />
              </IconButton>
            </TableCell>
          </CardActions>
        </Card>
      </Grid>
      <>
        <EditBlog
          open={openModal.showEdit}
          handleClose={handleCloseModal}
          blog={blog}
        />

        <DeleteBlog
          open={openModal.showDelete}
          handleClose={handleCloseModal}
          blog={blog}
        />
        <Popover
          open={Boolean(openMenu)}
          anchorEl={openMenu}
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
          <MenuItem onClick={() => handleOpenModal("Edit")}>
            <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
            Edit
          </MenuItem>

          <MenuItem
            sx={{ color: "error.main" }}
            onClick={() => handleOpenModal("Delete")}
          >
            <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover>
      </>
    </>
  );
}
