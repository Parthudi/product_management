import React, {useState, useEffect} from "react";
import InputField from "../../InputFields";
import {Button,Box,MenuItem,Select, Container} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import {CreateProductFormValidation} from "../../FormValidations";
import _ from "lodash";
import AlertMessage from '../../AlertMessage.js';
import {UpdateProduct, GetProductByProductId} from "../../ApiCall";
import { getUser } from "../../LocalStorageItems/User";
import {withRouter} from "react-router-dom";
import {API} from "../../../config";

const UpdateProductForm = (props) => {

    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [product, setProduct] = useState({});
    const [imagestring, setImageString] = useState("");
    const [message, setMessage] = useState("");
    const [filedata, setFileData] = useState(false);
    const [fileresource, setFileResource] = useState("");
    const [file, setFile] = useState(null);
    const [values, setValues] = useState({
        name: '',
        image: '',
        price: '',
        category: ''
    });
    const [errors, setErrors] = useState("");
    const {name, price, image} = values;
    const user = getUser();

    useEffect(() => {
        const productid = props.history.location.pathname.split("/").pop();
        setImageString(`${API}/product/image/${productid}`);
        GetProductByProductId(productid).then(product => {
            setProduct(product.data.Product);
            setValues({name: product.data.Product.name, price: product.data.Product.price, image: product.data.Product.image})
        });
    }, []);
    
    const handleOnChange = (e) => {
        if(e.target.name === "file"){
            setFile(e.target.files[0]);
            setFileData(true);
            handleOnFileChange(e);
        }else{
            setValues({...values, [e.target.name] : e.target.value});
        }
        setErrors(CreateProductFormValidation(values));
    }

    const handleOnFileChange = (e) => {
        const fileData = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = (e) => {
            setImageString(reader.result);
            console.log(reader.result);
        }
    }

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        if(!_.isEmpty(CreateProductFormValidation(values))){
            return;
        }
        try{
            let formData = new FormData();
            filedata && formData.append("image", file);
            formData.append("name", name);
            formData.append("price", price);
            const productId = props.history.location.pathname.split("/").pop();
            UpdateProduct(user._id, productId ,formData).then(response => {
                if(response.message) {
                    setTimeout(() => {
                        setShowErrorAlert(false);
                        }, 5000);
                    setShowErrorAlert(true);
                    setMessage(`Update Product Failed :-  ${response.message}`);
                    return;
                }else{
                    setValues({name: '',price: '',file: '',category: ''});
                    setTimeout(() => {
                        setShowSuccessAlert(false);
                    }, 3000);
                    setShowSuccessAlert(true);
                    setMessage(`${response.data.product}`);
                    window.location.reload();
                }           
            })
        }catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Update Product Failed :- ${error.message}`);
        }
    }

    const showProductForm = () => {
        return( 
            <form autoComplete="off">
                <Stack spacing={2}>

                    <InputField
                        label="Name"
                        name="name"
                        type="text"
                        fullWidth
                        value={values.name}
                        onChange={(e) => handleOnChange(e)} 
                        error = {Boolean(errors.name)}
                        helperText = {errors.name}
                    />

                    <InputField
                        showPadding={false}
                        label="Price"
                        name="price"
                        type="text"
                        fullWidth
                        value={values.price}
                        onChange={(e) => handleOnChange(e)}
                        error = {Boolean(errors.price)}
                        helperText = {errors.price}
                    />

                    <input type="file" name="file" onChange={(e) => handleOnChange(e)} />
                    <img src={`${imagestring}`}  height="270px" width="280px"/>

                    <Button type="submit" variant="contained" color="primary" disabled={name === "" || price === "" || imagestring === "" || !_.isEmpty(CreateProductFormValidation(values))} onClick={(e) => handleOnSubmit(e)} fullWidth> <b> Update Product </b> </Button>
                </Stack>
            </form>
        )}

    return(
        <Container>
            {showProductForm()}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" invalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={message} />}
        </Container>
    )
}

export default withRouter(UpdateProductForm);