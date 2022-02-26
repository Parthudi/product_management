import React, {useEffect, useState} from "react";
import Header from "./Header";
import {Grid, Typography, makeStyles, Box, Container} from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {getAllCategory, GetProductsRelatedToCategory, getAllProducts} from "./ApiCall";
import Products from "./Products/ProductsImage/Products";

const useStyle = makeStyles((theme) => ({
    centerAlignment: {
        textAlign: "center"
    },
    mainTitle: {
        fontFamily: "Henny Penny , cursive",
        fontSize: "38px",
        color: "purple",
    },
    title: {
        fontFamily: "Sans-serif, cursive",
        fontSize: "25px"
    },
    headerText: {
        color: "black",
        fontWeight: "bold",
        "&:hover": {
            color: "green"
        }
    },
    headerIcons: {
        color: "grey",
        "&:hover": {
            color: "green"
        }
    },
    adjustMargin: {
        marginLeft: "20rem"
    },
    [theme.breakpoints.up("md")]: {
        title: {
            fontSize: "21px",
            marginLeft: "75px",
            letterSpacing: "3px"
        }
    },
    [theme.breakpoints.down("sm")]: {
        title: {
            fontSize: "21px",
            marginLeft: "75px",
            letterSpacing: "3px"
        }
    }
}));

const HomePage = () => {
    const classes = useStyle();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        getAllCategory().then(response => {
            setCategories(response.data.category);
        });

        getAllProducts().then((response) => {
            setProducts(response.data.Products)
        })
    }, [categories.length]);

    const handleOnChange = (e) =>{
        setValue(e.target.value);
        handleRelatedProducts(e);
    }

    const handleRelatedProducts = (e) => {
        return(
            GetProductsRelatedToCategory(e.target.value).then((response) => {
                setProducts(response.data.Product);
            })
        );
    }

    return(
        <div>
            <Header />
            <Container>
            <Box mt={10}>
                <div className={classes.centerAlignment}>
                    <Typography className={classes.mainTitle}>
                            Product Management
                    </Typography>
                </div>
            </Box>

            <Box sx={{ flexGrow: 1 }} mt={5}>
                <Grid container>
                    <Grid item xs={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Filter
                            </Typography>
                        </Box>

                        <Box mt={5}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend"> Category </FormLabel>
                                <RadioGroup
                                    aria-label="Category"
                                    name="Category"
                                    value={value}
                                    onChange={(e) => handleOnChange(e)} >
                                    {categories && categories.map((category, i) => {
                                           return <FormControlLabel key={i} value={`${category._id}`} control={<Radio />} label={`${category.name.toUpperCase()}`} />
                                        })}
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={9}>
                        <Box>
                            <Typography className={classes.title}>
                                Products
                            </Typography>
                            <Box mt={5}>
                                <Products products={products} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            </Container>
        </div>
    )
}

export default HomePage;