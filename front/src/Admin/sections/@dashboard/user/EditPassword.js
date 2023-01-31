import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUser } from '../../../../Redux/actions/userActions';
import { useDispatch } from 'react-redux';


EditPassword.propTypes = {
    user: PropTypes.object.isRequired
};

export default function EditPassword({ user }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            password: user.password
        },
        validationSchema: Yup.object({
            password: Yup.string().max(255).required('Password is required'),
            changepassword: Yup.string().when("password", {
                is: val => (!val.length > 0),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Confirmation mismatch"
                )
            })
        }),
        onSubmit: (values) => {
            dispatch(updateUser(user._id, values, dispatch))
        },
    });
    return (

        <Box
            component="main"
        >
            <Container maxWidth="sm">
                <form onSubmit={formik.handleSubmit}>

                    <TextField
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        fullWidth
                        helperText={formik.touched.password && formik.errors.password}
                        label="New password"
                        margin="normal"
                        name="password"
                        type='password'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        variant="outlined"
                    />
                    <TextField
                        error={Boolean(formik.touched.changepassword && formik.errors.changepassword)}
                        fullWidth
                        helperText={formik.touched.changepassword && formik.errors.changepassword}
                        label="Confirm your password"
                        margin="normal"
                        name="changepassword"
                        type='password'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.changepassword}
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
                            Change password
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    );
}
