import React from "react";
import CreateProduct from "../Products/ProductsCRUD/CreateProduct";

const ProductComponent = () => {
    return (
      <div style={{textAlign: "center"}}>
        <CreateProduct />
        {/* <DeleteCategory /> */}
      </div>
    );
}

export default ProductComponent;