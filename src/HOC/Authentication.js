import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getUser} from '../Components/LocalStorageItems/User';
import _ from "lodash";

const AuthenticationRoute = ({component: Component , ...props}) => 
        <Route {...props} render={props => _.isEmpty(getUser()) ?
         ( <Redirect to={{pathname: '/signin' , state:{from: props.location}}} />  )        : 
         
         ( <Component {...props} />  ) }  />
    

export default AuthenticationRoute;