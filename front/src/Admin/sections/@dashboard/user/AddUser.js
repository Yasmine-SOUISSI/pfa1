import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, MenuItem, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../Redux/actions/userActions';
import { department, type } from '../../../utils/helper';

const Register = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.usersReducer.errors);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phoneNumber: '',
      department: '',
      type: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      firstname: Yup.string().max(255).required('First name is required'),
      lastname: Yup.string().max(255).required('First name is required'),
      type: Yup.string().required('Type is required'),
      department: Yup.string().required('Department is required'),
      password: Yup.string().max(255).required('Password is required'),
      phoneNumber: Yup.number().required('Phone number is required'),
    }),
    onSubmit: (values) => {
      dispatch(addUser(values, dispatch))
    },
  });

  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%',
      }}
    >
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
            label="Email"
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
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          <TextField
            style={{ width: '200px' }}
            className="px-2 my-2"
            variant="outlined"
            name="type"
            id="type"
            select
            label="User type"
            onBlur={formik.handleBlur}
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          >
            {type.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
            {department.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <p>{errors}</p>
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Add user
            </Button>
          </Box>
        </form>
      </Container>
    </Box>

  );
};

export default Register;
