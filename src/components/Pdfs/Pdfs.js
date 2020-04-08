import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import { makeStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    pdfLink: {
        textDecoration: 'none',
        color: 'black'
    },
    pdfLickIcon: {
        minWidth: '30px'
    }
});

const Pdfs = ({ files }) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <List>
            {files.map((file, i) => {
                const pdfPath = file.split('/');

                return (
                    <a href={file} target='_blank' key={i} className={classes.pdfLink}>
                        <ListItem>
                            <ListItemIcon className={classes.pdfLickIcon}>
                                <PictureAsPdfIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={pdfPath[pdfPath.length - 1]}
                            />
                        </ListItem>
                    </a>
                )
            })}
        </List>
    </div>;
};

Pdfs.propTypes = {
    files: PropTypes.array.isRequired
};

export default withRouter(Pdfs);
