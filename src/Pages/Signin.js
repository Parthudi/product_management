import React from "react";
import SigninComp from "../Components/SigninComponent";
import {Container, Box} from "@material-ui/core";

const SignIn = () => {
    return(
        <Container>
            <Box mt={5}>
                <SigninComp />
            </Box>
        </Container>
    )
}

export default SignIn;