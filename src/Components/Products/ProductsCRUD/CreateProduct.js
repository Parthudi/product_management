import React from "react";
import CreateProduct from "../ProductForm/CreateProductForm";
import CRUDComponent from "../../CRUDComponent";

const CreateCategoryC = () => {
    return (
        <CRUDComponent buttonColor={`primary`}  buttonName={`Create Product`} title={`Product`} contentText={`To create new product, please fill the form details here.`}>
            <CreateProduct />
        </CRUDComponent>
    );
}

export default CreateCategoryC;