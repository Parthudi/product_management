import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Container} from "@material-ui/core";

const CRUDComponent = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Container>
            <Box mt={10}>
                <div style={{textAlign: "center"}}>
                    <Button variant="contained" color={`${props.buttonColor}`} onClick={handleClickOpen} fullWidth>
                        {props.buttonName}
                    </Button>
                    
                    <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {props.contentText}
                        </DialogContentText>
                        {props.children}
                </DialogContent>
                </Dialog>
            </div>
        </Box>
      </Container>
    );
}

export default CRUDComponent;