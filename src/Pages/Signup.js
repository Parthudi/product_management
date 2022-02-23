import React from "react";
import SignupComp from "../Components/SignupComponent";
import {Container, Box} from "@material-ui/core";

const SignUp = () => {
    return(
        <Container>
            <Box mt={5}>
                <SignupComp />
            </Box>
        </Container>
    )
}

export default SignUp;