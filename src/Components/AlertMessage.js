import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const useStyles = makeStyles((theme) => ({
    pinCodeInvalid: {
        position: "fixed",
        left: "39rem",
        zIndex: 1,
        top: "13rem",
        borderRadius: "5px",
        padding: "0.7rem",
        fontSize: "15px",
        fontWeight: 600,
        width: "22rem",
        textAlign: "center",
        animation: "pincode 0.5s ease-in-out",
    },
    valid: {
        position: "fixed",
        right: "7rem",
        zIndex: 1,
        top: "4rem",
        borderRadius: "5px",
        padding: "0.7rem",
        fontSize: "15px",
        fontWeight: 600,
        width: "22rem",
        textAlign: "center",
        color: "white",
        animation: "pincode 0.5s ease-in-out",
    },
    "@keyframes pincode": {
        "0%": {
            transform: "translateY(-10rem)",
        },
        "40%": { 
            transform: "translateY(3rem)",
        },
        "70%": {
            transform: "translateY(-3rem)",
        },
        "100%": {
            transform: "translateY(0rem)",
        }
    }
}));

const AlertMessage = (props) => {
    const classes = useStyles();

    const AlertMessage = () => {
        return(
            <div style={{display: props.shouldDisplay === "dontShow" ? "" : "none"}} className={props.pinCodeInvalid ? classes.pinCodeInvalid : classes.valid}>
                <Alert severity={props.severity} >
                    <AlertTitle> {props.message} </AlertTitle>
                </Alert>
            </div>
        )
    }

    return( AlertMessage() )
}

export default AlertMessage;