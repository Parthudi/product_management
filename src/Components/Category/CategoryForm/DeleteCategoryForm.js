import React, {useState} from "react";
import {Button} from "@material-ui/core";
import _ from "lodash";
import AlertMessage from '../../AlertMessage';
import {RemoveCategory} from "../../ApiCall";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box} from "@material-ui/core";
import {getUser} from "../../LocalStorageItems/User";

const CreateCategoryForm = (props) => {
    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const user = getUser();

    const handleOnSubmit = async(event, i) => {
        event.preventDefault();
        try{
            if(!_.isEmpty(user)){
                const categoryId = props.categories[i]._id;
                const userId = user._id;
                RemoveCategory(userId, categoryId).then(response => {
                    if(response.message) {
                        setTimeout(() => {
                            setShowErrorAlert(false);
                            }, 5000);
                        setShowErrorAlert(true);
                        setMessage(`Create Category Failed :-  ${response.message}`);
                        return;
                    }else{
                        setTimeout(() => {
                            setShowSuccessAlert(false);
                        }, 3000);
                        setShowSuccessAlert(true);
                        setMessage(`${response.data.category}`);
                        window.location.reload();
                    }           
                })
            }else{
                setTimeout(() => {
                    setShowErrorAlert(false);
                }, 4000);
                setShowErrorAlert(true);
                setMessage(`Oops, Something Went Wrong`);
                return;
            }
        }
        catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Create Category Failed :- ${error.message}`);
        }
    }

    const showAccordinForm = () => {
        return( 
            <Box mt={5}>
                {props.categories && props.categories.map((category,i) => {
                    return(
                        <div key={i}>
                        <Accordion>
                            <AccordionSummary
                                   expandIcon={<ExpandMoreIcon />}
                                   aria-controls="panel1a-content"
                                   id="panel1a-header" >
                                    <Typography> {category.name.toUpperCase()} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Button color="secondary" size="large" startIcon={<DeleteIcon />} fullWidth onClick={(e) => handleOnSubmit(e, i)}> Delete {category.name} Category</Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </div>
                    )
                })}
            </Box> 
        )}

    return(
        <div>
            {showAccordinForm()}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" invalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" invalid={true} message={message} />}
        </div>
    )
}

export default CreateCategoryForm;