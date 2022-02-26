import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Box} from "@material-ui/core";
import Products from "./Products/ProductsImage/Products"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {withRouter} from "react-router-dom";
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {getUser} from "../Components/LocalStorageItems/User";
import _ from "lodash";
import {ProductSearch} from "./ApiCall";
import {removeUser} from "./LocalStorageItems/User";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = (props) => {
    const [products, setProducts] = useState([]);
    const userData = getUser();

    const handleSearch = (e) => {
      ProductSearch(e.target.value).then(response => {
        setProducts(response.data.Products);
      })
    }

    const productsPage = () => {
        return props.history.push("/product")
    }

    const categoriesPage = () => {
        return props.history.push("/category")
    }

    const signInOut = (userData) => {
      if(!_.isEmpty(userData)){
        removeUser();
      }else{
        return props.history.push("/signin");
      }
    }
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 0.06, display: { xs: 'none', sm: 'block' }, color: "goldenrod", cursor: "pointer" }}
                    onClick={() => productsPage()}>
                    Products
                </Typography>
                {(!_.isEmpty(userData) && userData.user_type === "admin") && 
              <>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 0.06, display: { xs: 'none', sm: 'block' }, color: "goldenrod", cursor: "pointer"  }}
                    onClick={() => categoriesPage()}>
                    Categories
                </Typography>
              </>
              } 
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "goldenrod", cursor: "pointer"  }}
                  onClick={() => signInOut(userData)}>
                    {_.isEmpty(userData) ? `Sign In` : `Sign Out`}
                </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              name="search"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleSearch(e)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

      {products && products.length > 0 && 
          <Box mt={10}>
            <div style={{textAlign: "center"}}>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ color: "Purple", cursor: "pointer", fontSize: "2.5rem", fontFamily: "Henny Penny , cursive" }}
                >
                  Related Products
                </Typography>
              </div>
             
              <Products products={products} />
          </Box>
          }
    </div>
  );
}

export default withRouter(Header);