import React, {useState} from 'react'
import {Button} from "@material-ui/core";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputFields from "./InputFields";
import {LoginUser} from "./ApiCall";
import {userRegistration} from "./LocalStorageItems/User";
import AlertMessage from './AlertMessage.js';
import {makeStyles, Card} from "@material-ui/core";
import {SigninSchema} from "./FormValidations";
import { withRouter } from 'react-router-dom';
import _ from "lodash";


const useStyles = makeStyles(theme =>({
    fillBackground: {
        backgroundColor: "white",
        boxShadow: "10px 5px 10px grey",
        borderRadius: "10px",
        padding: "20px"
    }
}));

const SignIn = (props) =>  {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [errors, setErrors] = useState("");

    const {email, password} = values;

        const handleOnSubmit = async(event) => {
        event.preventDefault();
        if(!_.isEmpty(SigninSchema(values))){
            return;
        }
        try{
            LoginUser(values).then(async data => {  
                if(data.message) {
                    setTimeout(() => {
                        setShowErrorAlert(false);
                      }, 4000);
                    setShowErrorAlert(true);
                    setMessage(`Login Failed  ${data.message}`);
                    return;
                }else{
                    // console.log(data.data.user);    
                    await userRegistration(data.data.user);
                    props.history.push("/");
                    window.location.reload();
                }   
            });
        }catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Login Failed  ${error.message}`);
        }
    };

    const handleOnChange = (event) => {
        setValues({...values, [event.target.name] : event.target.value});
        setErrors(SigninSchema(values));
    };

    const handleClickShowPassword = (name) => {
        name === "password" ? setValues({...values, showPassword: !values.showPassword}) :  setValues({...values, showConfirmPassword: !values.showConfirmPassword}) 
    };

    const formData = () => {
        return(
            <form autoComplete="off">
                <Stack mt={5} spacing={3}>
                    <InputFields 
                        showPadding={false}
                        label = "E-mail"
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={(e) => handleOnChange(e)}
                        error = {Boolean(errors.email)}
                        helperText = {errors.email}
                    />

                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password"> Password </InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-password'
                            type={values.showPassword ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={(e) => handleOnChange(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleClickShowPassword("password")} >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            } 
                            error = {Boolean(errors.password)}
                            helperText = {errors.password}/>
                    </FormControl>

                    <Button variant="contained" disabled={email === "" || password === "" || !_.isEmpty(SigninSchema(values))} size="medium" color="primary" onClick={(e) => handleOnSubmit(e)}> SIGN IN </Button>
                </Stack>
            </form>
        )
    }

    return (
        <Card className={classes.fillBackground}>
            {error !== "" && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={error} />}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" invalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={message} />}

            <h1><b> I already have an account </b></h1>
            <span> Signin with your email & password </span>
            {formData()}
        </Card>
        )       
  }

export default withRouter(SignIn);