import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateEvent } from '../../../../Redux/actions/eventsActions';


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

EditEvent.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    event: PropTypes.object.isRequired
};


export default function EditEvent({ event, open, handleClose }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: event.name,
            cover: event.cover,
            date: event.date,
            eventLink: event.eventLink,
        },
        validationSchema: Yup.object({
            name: Yup.string().max(255).required('Event name is required'),
            cover: Yup.string().required('cover is required'),
            eventLink: Yup.string().max(255).required('eventLink is required'),
        }),
        onSubmit: (values) => {
            dispatch(updateEvent(event._id, values, dispatch))
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
                            error={Boolean(formik.touched.name && formik.errors.name)}
                            fullWidth
                            helperText={formik.touched.name && formik.errors.name}
                            label="Event Name"
                            margin="normal"
                            name="name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.cover && formik.errors.cover)}
                            fullWidth
                            helperText={formik.touched.cover && formik.errors.cover}
                            label="Cover"
                            margin="normal"
                            name="cover"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.cover}
                            variant="outlined"
                        />

                        <TextField
                            error={Boolean(formik.touched.eventLink && formik.errors.eventLink)}
                            fullWidth
                            helperText={formik.touched.eventLink && formik.errors.eventLink}
                            label="Event link"
                            margin="normal"
                            name="eventLink"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.eventLink}
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
                                Edit event
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Box>
        </Modal>
    );
}
