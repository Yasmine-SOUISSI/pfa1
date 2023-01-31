import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { addEvent } from '../../../../Redux/actions/eventsActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
AddEvent.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default function AddEvent({ open, handleClose }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
      eventLink: '',
      date: new Date()
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Event name is required'),
      cover: Yup.string().required('Cover is required'),
      eventLink: Yup.string().required('Event link is required'),
      date:Yup.date().required('Date is required')

    }),
    onSubmit: (values) => {
      dispatch(addEvent(values, dispatch))
    },
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="main" sx={style}>
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
              error={Boolean(formik.touched.cover && formik.errors.cover)}
              fullWidth
              helperText={formik.touched.cover && formik.errors.cover}
              label="Date"
              margin="normal"
              name="date"
              type='date'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.date}
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
              value={formik.values.Event_link}
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
                Add event
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Modal>
  );
}
