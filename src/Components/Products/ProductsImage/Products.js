import React from "react";
import ShowProducts from "./ShowProduct";
import {Grid} from "@material-ui/core";

const Products = ({products}) => {
    return(
        <Grid container>
            {products && products.length > 0 && products.map((product, i) => {
                return <ShowProducts key={i} products={product} />
            })}
        </Grid>
    )
}

export default Products;