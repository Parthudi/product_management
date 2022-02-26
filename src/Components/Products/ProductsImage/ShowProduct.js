import React from 'react'
import { Card,CardActions,CardContent,Typography,CardMedia, Grid} from '@material-ui/core';
import {makeStyles,TextField,Box} from '@material-ui/core';
import moment from "moment";

const useStyles = makeStyles(() => ({
    setPerfectImage: {
        height: "224px",
        width: "270px"
    },
}))

const ShowProducts = (props) => {
    const classes = useStyles();

    return(
        <Box m={2} pt={2}>
            <Card>
                <CardMedia
                    component="img"
                    image={`http://localhost:3001/v1/product/image/${props.products._id}`}
                    alt={props.alt}
                    className={classes.setPerfectImage}
                />
                <CardContent>
                    <Typography variant="h5" >
                        {props.products.name}
                    </Typography>
                    <Box>
                        <TextField fullWidth label="Price" type="number" value={props.products.price}  id="outlined-number" />
                    </Box>
                    <Typography sx={{ mb: 1.5 }} varient="body1">
                        Expiry Date :- {moment(props.products.expiry_date).format('DD-MM-YYYY')} 
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} varient="body1">
                        Status :- {props.products.status} 
                    </Typography>
                </CardContent>
                <CardActions className={classes.showButtonCenter}>
                
                </CardActions>
            </Card> 
        </Box>
    )}

export default ShowProducts

