import React, {useState} from "react";
import InputField from "../../InputFields";
import {Button} from "@material-ui/core";
import _ from "lodash";
import Stack from '@mui/material/Stack';
import AlertMessage from '../../AlertMessage';
import {CreateCategory} from "../../ApiCall";

const CreateCategoryForm = () => {
    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        try{
            CreateCategory(name).then(data => {  
                if(data.message) {
                    setTimeout(() => {
                        setShowErrorAlert(false);
                        }, 5000);
                    setShowErrorAlert(true);
                    setMessage(`Create Category Failed :-  ${data.message}`);
                    return;
                }else{
                    setName('');
                    setTimeout(() => {
                        setShowSuccessAlert(false);
                    }, 3000);
                    setShowSuccessAlert(true);
                    setMessage("Category Created Successfull");
                    window.location.reload();
                }           
            })
        }catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Create Category Failed :- ${error.message}`);
        }
    }

    const showCategoryForm = () => {
        return( 
            <form autoComplete="off">
                <Stack spacing={2}>
                <InputField
                    label="Category Name"
                    name="name"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />

                <Button type="submit" variant="contained" color="secondary" disabled={name === ""} onClick={(e) => handleOnSubmit(e)} fullWidth> <b> Create Category </b> </Button>
                </Stack>
            </form>
        )}

    return(
        <div>
            {showCategoryForm()}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" invalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={message} />}
        </div>
    )
}

export default CreateCategoryForm;