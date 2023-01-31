import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Grid, Typography, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../Redux/actions/blogsActions";
import AddBlog from "../sections/@dashboard/blog/AddBlog";
import BlogCard from "../sections/@dashboard/blog/BlogCard";

const theme = createTheme();

export default function BlogPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getBlogs(dispatch));
  }, [dispatch]);
  const blogs = useSelector((state) => state.blogsReducer.blogs);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='relative'>
        <Button
          variant='contained'
          onClick={handleOpen}
          sx={{
            margin: "100px",
          }}
        >
          New blog
        </Button>
      </AppBar>
      <AddBlog open={open} handleClose={handleClose} />
      <Grid container spacing={4}>
        {blogs.length > 0 &&
          blogs.map((blog, key) => <BlogCard blog={blog} key={key} />)}
      </Grid>
    </ThemeProvider>
  );
}
