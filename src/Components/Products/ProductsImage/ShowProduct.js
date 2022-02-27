import React, {useState} from 'react'
import { Card,CardActions,CardContent,Typography,CardMedia, Grid} from '@material-ui/core';
import {makeStyles,TextField,Box,Button} from '@material-ui/core';
import moment from "moment";
import { getUser } from '../../LocalStorageItems/User';
import {RemoveProduct} from "../../ApiCall";
import AlertMessage from '../../AlertMessage';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    setPerfectImage: {
        height: "224px",
        width: "270px"
    },
}))

const ShowProducts = (props) => {
    const classes = useStyles();
    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const user = getUser();

    const handleRemoveProduct = (productId) => {
        RemoveProduct(user._id, productId).then(response => {
            if(response.message) {
                setTimeout(() => {
                    setShowErrorAlert(false);
                    }, 5000);
                setShowErrorAlert(true);
                setMessage(`${response.message}`);
                return;
            }else{
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 3000);
                setShowSuccessAlert(true);
                setMessage(`${response.data.product}`);
                window.location.reload();
            }  
        });
    }

    const handleUpdateProduct = (productId) => {
        console.log(props.products);
        props.history.push(`${props.history.location.pathname}/update/${productId}`);
    }

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
                    {props.removeProductButton && 
                        <Button variant="outlined" color="secondary" fullWidth onClick={() => handleRemoveProduct(props.products._id)}> 
                            Remove Product
                        </Button>
                    }

                    {props.updateProductButton && 
                        <Button variant="outlined" color="secondary" fullWidth onClick={() => handleUpdateProduct(props.products._id)}> 
                            Update Product
                        </Button>
                    }
                </CardActions>
            </Card> 
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" invalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={message} />}
        </Box>
    )}

export default withRouter(ShowProducts);

