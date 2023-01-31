import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateBlog } from '../../../../Redux/actions/blogsActions';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

EditBlog.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    blog: PropTypes.object.isRequired
};


export default function EditBlog({ blog, open, handleClose }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            description: blog.description,
            title: blog.title,
            photo: blog.photo,
            date: blog.date,
            blogLink: blog.blogLink,
        },
        validationSchema: Yup.object({
            title: Yup.string().max(255).required('Blog title is required'),
            photo: Yup.string().required('photo is required'),
            blogLink: Yup.string().required('Blog link is required'),
            description: Yup.string().required('Description is required'),
            date: Yup.date().required('Date is required')
        }),
        onSubmit: (values) => {
            dispatch(updateBlog(blog._id, values, dispatch))
        },
    });
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                component="main"
                sx={style}
            >
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            error={Boolean(formik.touched.title && formik.errors.title)}
                            fullWidth
                            helperText={formik.touched.title && formik.errors.title}
                            label="Blog title"
                            margin="normal"
                            name="title"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.photo && formik.errors.photo)}
                            fullWidth
                            helperText={formik.touched.photo && formik.errors.photo}
                            label="Cover"
                            margin="normal"
                            name="photo"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.photo}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.description && formik.errors.description)}
                            fullWidth
                            helperText={formik.touched.description && formik.errors.description}
                            label="Blog description"
                            margin="normal"
                            multiline
                            rows={2}
                            maxRows={4}
                            name='description'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.date && formik.errors.date)}
                            fullWidth
                            helperText={formik.touched.date && formik.errors.date}
                            label="Date"
                            margin="normal"
                            type="date"
                            name='date'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.date}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.blogLink && formik.errors.blogLink)}
                            fullWidth
                            helperText={formik.touched.blogLink && formik.errors.blogLink}
                            label="Blog link"
                            margin="normal"
                            name="blogLink"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.blogLink}
                            variant="outlined"
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Edit blog
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Box>
        </Modal>
    );
}
