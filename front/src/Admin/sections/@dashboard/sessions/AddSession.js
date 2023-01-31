import * as React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { addSession } from '../../../../Redux/actions/sessionsActions';

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
AddSession.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default function AddSession({ open, handleClose }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
      department: '',
      sessionLink:'',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Session name is required'),
      cover: Yup.string().required('Cover is required'),
      department: Yup.string().max(255).required('Department name is required'),
      sessionLink:Yup.string().required('Session link is required'),
    }),
    onSubmit: (values) => {
      dispatch(addSession(values,dispatch))
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
              label="Session Name"
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
              error={Boolean(formik.touched.department && formik.errors.department)}
              fullWidth
              helperText={formik.touched.department && formik.errors.department}
              label="Department name"
              margin="normal"
              name="department"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.department}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.sessionLink && formik.errors.sessionLink)}
              fullWidth
              helperText={formik.touched.sessionLink && formik.errors.sessionLink}
              label="Session link"
              margin="normal"
              name="sessionLink"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.sessionLink}
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
                Add session
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Modal>
  );
}
