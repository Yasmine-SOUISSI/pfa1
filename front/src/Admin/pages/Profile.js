import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../Redux/actions/authActions';
import { Box, Typography, Avatar, Tab, Tabs } from '@mui/material';
import { StyledAccount } from '../layouts/nav';
import account from '../_mock/account';
import EditProfile from '../sections/@dashboard/user/EditProfile';
import EditPassword from '../sections/@dashboard/user/EditPassword';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Profile() {
    const id = localStorage.getItem('userId');
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser(id, dispatch));
    }, [dispatch, id]);

    const user = useSelector((state) => state.authReducer.user);
    console.log(value)

    return (
        <div className="container emp-profile">

            <div className="row center ">
                <div className="profile-head">
                    <Box sx={{ mb: 5, mx: 2.5 }}>

                        <StyledAccount>
                            <Avatar src={account.photoURL} alt="photoURL" />
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                                    {user.firstname} {user.lastname}
                                </Typography>

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {user.department}
                                </Typography>
                            </Box>
                        </StyledAccount>

                        <Box sx={{ mt: 2 }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Email</p>
                                </div>
                                <div className="col-md-6">
                                    <p>{user.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Phone</p>
                                </div>
                                <div className="col-md-6">
                                    <p>{user.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Department</p>
                                </div>
                                <div className="col-md-6">
                                    <p>{user.department}</p>
                                </div>
                            </div>
                        </Box>
                    </Box>

                </div>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Edit Profile" {...a11yProps(0)} />
                        <Tab label="Change Password" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <EditProfile user={user} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <EditPassword user={user} />
                </TabPanel>
            </Box>
        </div >
    );

}