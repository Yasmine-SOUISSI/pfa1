import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateProfile } from '../../../../Redux/actions/authActions';
import { useDispatch } from 'react-redux';


EditProfile.propTypes = {
    user: PropTypes.object.isRequired
};

export default function EditProfile({ user }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            ...user,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            phoneNumber: user.phoneNumber,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            firstname: Yup.string().max(255).required('First name is required'),
            lastname: Yup.string().max(255).required('lastname is required'),
            phoneNumber: Yup.string().max(255).required('Password is required'),
        }),
        onSubmit: (values) => {
            dispatch(updateProfile(user._id, values, dispatch))
        },
    });
    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    error={Boolean(formik.touched.firstname && formik.errors.firstname)}
                    fullWidth
                    helperText={formik.touched.firstname && formik.errors.firstname}
                    label="Firstname"
                    margin="normal"
                    name="firstname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
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
                <Box sx={{ py: 2 }}>
                    <Button
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Update profile
                    </Button>
                </Box>
            </form>
        </Container>
    );
}
