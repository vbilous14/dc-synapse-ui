import React, {useCallback, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
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
    const classes = useStyles();
    const [successMsg, setSuccessMsg] = useState('');
    const handleSubmit = useCallback(() => {
        setSuccessMsg('Profile saved successfully');
    }, []);
    const handleClose = useCallback(() => {
        setSuccessMsg();
    }, []);

    return (
        <div>
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
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'bottom'
                }}
                onClose={handleClose}
                open={!!successMsg}
                message={successMsg}
                autoHideDuration={2000}
            />
        </div>
    )
};

export default Profile;
