import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Stepper from '@material-ui/core/Stepper';
import StepMaterial from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Edit, SimpleForm, showNotification as showNotificationAction, SaveButton, Toolbar, Button } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import Photos from '../Photos/Photos'
import Pdfs from '../Pdfs/Pdfs'

import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useStepsTabStyles = makeStyles({
    root: {}
});

const useStepStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100%'
    },
    stepForm: {
        flex: 1
    },
    stepFiles: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    stepFilesSelect: {
        width: '110px',
        marginTop: '1em'
    },
    stepFilesBlock: {
        width: '400px',
        marginTop: '20px'
    }
});

let prevStep = {};

export const Step = ({ step, actions, toolbar, data, ...restProps }) => {
    const [activeFileType, setFileType] = useState(step.files[0].value);
    const classes = useStepStyles();

    useEffect(() => {
        if (step !== prevStep) {
            setFileType(step.files[0].value);

            prevStep = step;
        }
    }, [step]);

    const handleFileTypeChange = event => {
        setFileType(event.target.value)
    };

    return (
        <div className={classes.root}>
            <div className={classes.stepForm}>
                <Edit {...restProps} actions={actions}>
                    <SimpleForm toolbar={toolbar}>
                        {step.editFields.map((field, i) => <field.component key={i} source={field.source} />)}
                    </SimpleForm>
                </Edit>
            </div>
            <div className={classes.stepFiles}>
                <FormControl className={classes.stepFilesSelect}>
                    <InputLabel>File types</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={activeFileType}
                        onChange={handleFileTypeChange}
                    >
                        {step.files.map((fileType, i) => <MenuItem value={fileType.value} key={i}>{fileType.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <div className={classes.stepFilesBlock}>
                    {activeFileType === 'photo' && <Photos files={data.files[activeFileType]} />}
                    {activeFileType === 'pdf' && <Pdfs files={data.files[activeFileType]} />}
                </div>
            </div>
        </div>
    );
};

const CardActions = ({ onNextStep, onSave, isLastStep, ...restProps }) => {
    const StepButton = isLastStep ? SaveButton : Button;

    return (
        <Toolbar {...restProps} >
            <StepButton
                redirect={false}
                {...(isLastStep ? {
                    label: 'Save',
                    onSave
                } : {
                    label: 'Next',
                    onClick: onNextStep
                })}
            />
        </Toolbar>
    );
};

const StepsTab = ({ tab, history }) => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStepsTabStyles();
    const dispatch = useDispatch();
    const editProps = {
        basePath: `${tab.url}/${tab.dataId}`,
        history: {},
        match: { path: '/', url: '/', isExact: true, params: {} },
        resource: tab.data,
        id: tab.dataId,
        location: { pathname: '/', search: '', hash: '', state: undefined }
    };
    const { data: dataObj } = useSelector(({ admin }) => (admin.resources[tab.data] || { data: {} }));
    const data = dataObj[tab.dataId] || {};
    const handleSave = () => {
        dispatch(showNotificationAction('Data saved successfully'));
    };
    const handleNextStep = () => {
        setActiveStep(activeStep + 1);
    };

    return <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
            {tab.steps.map((tabInfo, i) => (
                <StepMaterial key={i}>
                    <StepLabel>{tabInfo.name}</StepLabel>
                </StepMaterial>
            ))}
        </Stepper>
        <Step
            {...editProps}
            data={data}
            history={history}
            step={tab.steps[activeStep]}
            toolbar={<CardActions isLastStep={tab.steps.length - 1 === activeStep} onNextStep={handleNextStep} onSave={handleSave} />}
        />
    </div>;
};

StepsTab.propTypes = {
    tab: PropTypes.object,
    tabIndex: PropTypes.number.isRequired
};

StepsTab.defaultProps = {
    tab: {}
};

export default withRouter(StepsTab);
