import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CssBaseline, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getBlogById } from '../../Redux/actions/blogsActions';
import MainFeaturedPost from '../sections/@dashboard/blog/MainFeaturedPost';

const theme = createTheme();

export default function Blog() {
    const dispatch = useDispatch();
    const { blogId } = useParams()
    const blog = useSelector((state) => state.blogsReducer.blog);

    useEffect(() => {
        dispatch(getBlogById(blogId, dispatch));
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <MainFeaturedPost blog={blog} />
                <Typography variant="h5" color="inherit" paragraph>
                    {blog.description}
                </Typography>
            </Container>
        </ThemeProvider>
    );
}
