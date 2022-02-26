import React, {useState, useEffect} from "react";
import InputField from "../../InputFields";
import {Button,Box,MenuItem,Select} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import {getAllCategory} from "../../ApiCall";
import {CreateProductFormValidation} from "../../FormValidations";
import _ from "lodash";
import AlertMessage from '../../AlertMessage.js';
import {CreateProductCall} from "../../ApiCall";
import { getUser } from "../../LocalStorageItems/User";

const CreateProductForm = () => {

    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const [values, setValues] = useState({
        name: '',
        image: '',
        price: '',
        category: ''
    });
    const [errors, setErrors] = useState("");
    const {name, price, category} = values;
    const user = getUser();

    useEffect(() => {
        getAllCategory().then(response => {
            setCategories(response.data.category);
        });
    }, [categories.length]);

    
    const handleOnChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "file"){
            setFile(e.target.files[0]);
        }else{
            setValues({...values, [e.target.name] : e.target.value});
        }
        setErrors(CreateProductFormValidation(values));
    }

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        if(!_.isEmpty(CreateProductFormValidation(values))){
            return;
        }
        try{
            let formData = new FormData();
            formData.append("image", file);
            formData.append("name", name);
            formData.append("price", price);
            formData.append("category", category);
            
            CreateProductCall(formData, user._id).then(data => {  
                if(data.message) {
                    setTimeout(() => {
                        setShowErrorAlert(false);
                        }, 5000);
                    setShowErrorAlert(true);
                    setMessage(`Create Product Failed :-  ${data.message}`);
                    return;
                }else{
                    setValues({name: '',price: '',file: '',category: ''});
                    setTimeout(() => {
                        setShowSuccessAlert(false);
                    }, 3000);
                    setShowSuccessAlert(true);
                    setMessage("Product Created Successfull");
                    window.location.reload();
                }           
            })
        }catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Create Product Failed :- ${error.message}`);
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
                    
                    <Box sx={{ minWidth: 120, marginTop: 15}}>
                        <FormControl fullWidth>
                            <Select labelId="type" id="type" name="category" value={category} onChange={(e) => handleOnChange(e)}>
                                {categories && categories.map((category, i) => {
                                        return <MenuItem value={category._id} key={i}> {category.name} </MenuItem>
                                    })}
                            </Select> 
                        </FormControl>
                    </Box>

                    <input type="file" name="file" onChange={(e) => handleOnChange(e)} />

                    <Button type="submit" variant="contained" color="secondary" disabled={name === "" || price === "" || file == null || category === "" || !_.isEmpty(CreateProductFormValidation(values))} onClick={(e) => handleOnSubmit(e)} fullWidth> <b> Create Product </b> </Button>
                </Stack>
            </form>
        )}

    return(
        <div>
            {showProductForm()}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" invalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={message} />}
        </div>
    )
}

export default CreateProductForm;