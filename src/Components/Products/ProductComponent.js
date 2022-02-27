import React from "react";
import CreateProduct from "../Products/ProductsCRUD/CreateProduct";
import DeleteProduct from "../Products/ProductsCRUD/DeleteProduct";
import UpdateProduct from "../Products/ProductsCRUD/UpdateProduct";

const ProductComponent = () => {
    return (
      <div style={{textAlign: "center"}}>
        <CreateProduct />
        <DeleteProduct />
        <UpdateProduct />
      </div>
    );
}

export default ProductComponent;