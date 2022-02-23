import React, {Fragment} from "react";
import {TextField, makeStyles, Box} from "@material-ui/core";

const InputFieldAndValidations = ({showPadding = true, ...props}) => {
    return(
        <Fragment>
                    {showPadding && <Box height={15}/>}
                    <TextField
                        variant = "outlined"
                        label = {props.label}
                        name = {props.name}
                        value = {props.value}
                        onChange = {props.onChange}
                        required = {props.required}
                        type= {props.type}
                        fullWidth = {props.fullWidth}
                        onBlur = {props.onBlur}
                        error = {props.error}
                        helperText={props.helperText}
                    />
        </Fragment>
    )
}

export default InputFieldAndValidations;