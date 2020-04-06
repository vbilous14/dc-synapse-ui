import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { showNotification as showNotificationAction } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '8px 20px',
        height: 'calc(100vh - 48px)',
        boxSizing: 'border-box'
    },
    buttonWrapper: {
        marginTop: '15px'
    }
});

const Profile = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = useCallback(() => {
        dispatch(showNotificationAction('Profile saved successfully'));
    }, []);

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField label='Name' required />
            <TextField label='Age' type='number' inputProps={{ min: '0', step: '1' }} required />
            <TextField label='Job title' required />
            <div>
                <Button className={classes.buttonWrapper} variant='contained' color='primary' type='submit'>
                    Save
                </Button>
            </div>
        </form>
    )
};

export default Profile;
