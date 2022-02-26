import React from "react";
import CreateCategory from "./CategoriesCRUD/CreateCategory";
import DeleteCategory from "./CategoriesCRUD/DeleteCategory";
import Stack from '@mui/material/Stack';

const CategoryComponent = () => {
    return (
            <div style={{textAlign: "center"}}>
                <CreateCategory />
                <DeleteCategory />
            </div>
    );
}

export default CategoryComponent;