import React from "react";
import ShowProducts from "./ShowProduct";
import {Grid} from "@material-ui/core";

const Products = ({products, removeProductButton = false, updateProductButton = false}) => {
    return(
        <Grid container>
            {products && products.length > 0 && products.map((product, i) => {
                return <ShowProducts key={i} products={product} removeProductButton={removeProductButton} updateProductButton={updateProductButton} />
            })}
        </Grid>
    )
}

export default Products;