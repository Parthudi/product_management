import React from "react";
import CreateCategory from "../CategoryForm/CreateCategoryForm";
import CRUDComponent from "../../CRUDComponent";

const CreateCategoryC = () => {
    return (
        <CRUDComponent buttonColor={`primary`}  buttonName={`Create Category`} title={`Category`} contentText={`To create new category, please fill the form details here.`}>
            <CreateCategory />
        </CRUDComponent>
    );
}

export default CreateCategoryC;