import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { deleteSession } from '../../.../../../../Redux/actions/sessionsActions';


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

DeleteSession.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    session: PropTypes.object.isRequired
};


export default function DeleteSession({ session, open, handleClose }) {
    const dispatch = useDispatch();

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
                    <Typography variant="subtitle2" noWrap>
                        Are you sure you want to delete this session ?
                    </Typography>
                    <Box sx={{ py: 2 }}>
                        <Button
                            color="primary"
                            fullWidth
                            size="large"
                            onClick={() => dispatch(deleteSession(session._id, dispatch))}
                            type="button"
                            variant="contained"
                        >
                            Delete session 
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Modal>
    );
}
