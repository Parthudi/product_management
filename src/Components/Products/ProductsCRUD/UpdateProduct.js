import React, {useState, useEffect} from "react";
import {getAllProducts} from "../../ApiCall";
import { getUser } from "../../LocalStorageItems/User";
import _ from "lodash";
import {Button, Container, Box} from "@material-ui/core";
import Product from "../ProductsImage/Products";

const UpdateProductC = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() =>{
        const user = getUser();
        getAllProducts().then(response => {
            if(_.isEmpty(user)){
                return ;
            }else{
                if(user && user.user_type === "admin"){
                    setProducts(response.data.Products);
                }else{
                    setProducts(response.data.Products);
                    // const newProdArr = [...products];
                    // response.data.Products && response.data.Products.map((prod) => {
                    //     if(prod.owner.toString() === user._id){
                    //         newProdArr.push(prod);
                    //     }
                    // });
                    // setProducts(newProdArr);
                }
            }
        })
    }, []);

    const showAccordinForm = () => {
        return( 
            <Box mt={5}>
               <Product products={products} removeProductButton={false} updateProductButton={true}/>
            </Box> 
        )}

    return (
        <Container>
            <Box mt={5} mb={5}>
                <Button variant="contained" color="inherit" onClick={() => setVisible(!visible)} fullWidth>
                    Update Product
                </Button>
            </Box>
            {visible && showAccordinForm()}
        </Container>
    );
}

export default UpdateProductC;