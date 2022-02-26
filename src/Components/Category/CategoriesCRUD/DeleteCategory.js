import React, {useState, useEffect} from "react";
import CRUDComponent from "../../CRUDComponent";
import {getAllCategory} from "../../ApiCall";
import DeleteCategory from "../CategoryForm/DeleteCategoryForm";

const DeleteCategoryD = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() =>{
        getAllCategory().then(response => {
            setCategories(response.data.category);
        });
    }, []);

    return (
        <CRUDComponent buttonColor={`secondary`}  buttonName={`Delete Category`} title={`Category`} contentText={`To delete existing category, please select the category.`}>
            <DeleteCategory categories={categories}/>
        </CRUDComponent>
    );
}

export default DeleteCategoryD;