import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../../../Redux/actions/eventsActions';


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

DeleteEvent.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    event: PropTypes.object.isRequired
};


export default function DeleteEvent({ event, open, handleClose }) {
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
                        Are you sure you want to delete this event ?
                    </Typography>
                    <Box sx={{ py: 2 }}>
                        <Button
                            color="primary"
                            fullWidth
                            size="large"
                            onClick={() => dispatch(deleteEvent(event._id, dispatch))}
                            type="button"
                            variant="contained"
                        >
                            Delete event 
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Modal>
    );
}
