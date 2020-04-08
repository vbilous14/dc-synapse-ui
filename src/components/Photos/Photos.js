import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom';

import useInterval from '../../hooks/useInterval';

const CAROUSEL_SLIDE_WIDTH = 400;
const PLAY_DURATION = 4500;
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;
const SPACE_KEY_CODE = 32;

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttons: {
        display: 'flex'
    },
    button: {
        cursor: 'pointer'
    },
    carousel: {
        width: `${CAROUSEL_SLIDE_WIDTH}px`,
        overflow: 'hidden'
    },
    carouselSlide: {
        width: `${CAROUSEL_SLIDE_WIDTH}px`
    },
    carouselTrack: {
        display: 'flex',
        alignItems: 'flex-start',
        transition: 'left 0.5s',
        position: 'relative',
        left: 0,
        width: '99999999px'
    },
    carouselSlidePhoto: {
        width: '100%'
    }
});

let timerId;

const Photos = ({ files }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const classes = useStyles();
    const goToPrevSlide = () => setActiveSlide(activeSlide => activeSlide === 0 ? files.length - 1 : activeSlide - 1);
    const goToNextSlide = () => setActiveSlide(activeSlide => activeSlide === files.length - 1 ? 0 : activeSlide + 1);
    const handleControlButtonClick = direction => () => {
        if (direction === 'left') {
            goToPrevSlide();
        } else {
            goToNextSlide();
        }
    };
    const handlePlayClick = () => {
        setIsPlay(true);
        goToNextSlide();
    };
    const handlePauseClick = () => {
        setIsPlay(false);
        clearTimeout(timerId);
    };

    const handleKeydown = (e) => {
        if (e.keyCode === LEFT_KEY_CODE) {
            goToPrevSlide();
        }
        else if (e.keyCode === RIGHT_KEY_CODE) {
            goToNextSlide();
        } else if (e.keyCode === SPACE_KEY_CODE) {
            e.preventDefault();

            setIsPlay(isPlay => {
                const newIsPlay = !isPlay;

                if (newIsPlay) {
                    goToNextSlide();
                } else {
                    clearTimeout(timerId);
                }

                return newIsPlay;
            });
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }
    }, []);

    useInterval(() => {
        if (isPlay) {
            goToNextSlide();
        }
    }, PLAY_DURATION);

    return <div className={classes.root}>
        <div className={classes.buttons}>
            <div className={classes.button} onClick={handleControlButtonClick('left')}>
                <ArrowLeftIcon />
            </div>
            { isPlay ?
                <div className={classes.button} onClick={handlePauseClick}>
                    <PauseIcon />
                </div> :
                <div className={classes.button} onClick={handlePlayClick}>
                    <PlayArrowIcon />
                </div>
            }
            <div className={classes.button} onClick={handleControlButtonClick('right')}>
                <ArrowRightIcon />
            </div>
        </div>
        <div className={classes.carousel}>
            <div className={classes.carouselTrack} style={{ left: -activeSlide * CAROUSEL_SLIDE_WIDTH }}>
                {files.map((file, i) => <div className={classes.carouselSlide} key={i}>
                    <img src={file} alt={`photo-${i}`} className={classes.carouselSlidePhoto}/>
                </div>)}
            </div>
        </div>
    </div>;
};

Photos.propTypes = {
    files: PropTypes.array.isRequired
};

export default withRouter(Photos);
