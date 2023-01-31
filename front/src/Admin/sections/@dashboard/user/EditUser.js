import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, MenuItem, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUser } from '../../../../Redux/actions/userActions';
import { useDispatch } from 'react-redux';


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

EditUser.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    user: PropTypes.object.isRequired
};

const type = [
    {
        label: 'XXX',
        value: 'XXX',
    },
    {
        label: 'XXX',
        value: 'XXX',
    },
    {
        label: 'XXX',
        value: 'XXX',
    },
];
const department = [
    {
        label: 'not a member',
        value: 'XXX',
    },
];

export default function EditUser({ user, open, handleClose }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: user.email,
            fistname: user.fistname,
            lastname: user.lastname,
            phoneNumber: user.phoneNumber,
            type: 'XXX',
            department: 'XXX'
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            fistname: Yup.string().max(255).required('First name is required'),
            lastname: Yup.string().max(255).required('First name is required'),
            userType: Yup.string().required('Type is required'),
            password: Yup.string().max(255).required('Password is required'),
            department: Yup.string().required('Type is required'),
        }),
        onSubmit: (values) => {
            dispatch(updateUser(user._id, values, dispatch))
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
                            error={Boolean(formik.touched.fistname && formik.errors.fistname)}
                            fullWidth
                            helperText={formik.touched.fistname && formik.errors.fistname}
                            label="Firstname"
                            margin="normal"
                            name="fistname"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.fistname}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.lastname && formik.errors.lastname)}
                            fullWidth
                            helperText={formik.touched.lastname && formik.errors.lastname}
                            label="Lastname"
                            margin="normal"
                            name="lastname"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                            fullWidth
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            label="Phone number"
                            margin="normal"
                            name="phoneNumber"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="number"
                            value={formik.values.phoneNumber}
                            variant="outlined"
                        />
                        <TextField
                            style={{ width: '200px' }}
                            className="px-2 my-2"
                            variant="outlined"
                            name="department"
                            id="department"
                            select
                            label="Department"
                            onBlur={formik.handleBlur}
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            error={formik.touched.department && Boolean(formik.errors.department)}
                            helperText={formik.touched.department && formik.errors.department}
                        >
                            {department.map((option, key) => (
                                <MenuItem key={key} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            style={{ width: '200px' }}
                            className="px-2 my-2"
                            variant="outlined"
                            name="userType"
                            id="userType"
                            select
                            label="Type"
                            onBlur={formik.handleBlur}
                            value={formik.values.userType}
                            onChange={formik.handleChange}
                            error={formik.touched.userType && Boolean(formik.errors.userType)}
                            helperText={formik.touched.userType && formik.errors.userType}
                        >
                            {type.map((option, key) => (
                                <MenuItem key={key} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Update user
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Box>
        </Modal>
    );
}
