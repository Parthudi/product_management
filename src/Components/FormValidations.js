export const Form_Validation = (values) => {
    let error = {};

    if(values.username) {
      if(!values.username){
        error.username = "Name Is Required";
      }else if(values.username.length < 4){
        error.username = "Name To Short"
      }else if(values.username.length > 25){
        error.username = "Name To Big"
      }
    }

    if(values.email) {
      if(!values.email){
        error.email = "Email Is Required";
      }else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "Email Is Invalid"
      }
    }
    
    if(values.password){
      if(!values.password){
        error.password = "Password Is Required";
      }else if(values.password.length < 5){
        error.password = "Password Must Be 5 Characters Long"
      }
    }

    if(values.confirmpassword){
      if(!values.confirmpassword){
        error.confirmpassword = "Confirm Password Is Required";
      }else if(values.confirmpassword.length < 5){
        error.confirmpassword = "Confirm Password Must Be 5 Characters Long"
      }else if(values.password !== values.confirmpassword){
        error.confirmpassword = "Password And ConfirmPassword Didnot Match"
        error.password = "Password And ConfirmPassword Didnot Match"
      }
    }

    return error;
}

export const SigninSchema = (values) => {
  let error = {};

  if(values.email) {
    if(!values.email){
      error.email = "Email Is Required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
      error.email = "Email Is Invalid"
    }
  }
  
  if(values.password){
    if(!values.password){
      error.password = "Password Is Required";
    }else if(values.password.length < 5){
      error.password = "Password Must Be 5 Characters Long"
    }
  }

  return error;
    };

    export const CreateProductFormValidation = (values) => {
      let error = {};
  
      if(values.name) {
        if(!values.name){
          error.name = "Name Is Required";
        }else if(values.name.length < 2){
          error.name = "Name To Short"
        }else if(values.name.length > 25){
          error.name = "Name To Big"
        }
      }
  
      if(values.fileStream) {
        if(!values.fileStream){
          error.fileStream = "";
        }
      }
      
      if(values.price){
        if(!values.price){
          error.price = "Password Is Required";
        }
      }
  
      if(values.category){
        if(!values.category){
          error.category = "Category Is Required";
        }
      }
      return error;
  }

  

    // if(nameField === "name") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid Name";
    //     }
    //     if(value === ""){
    //         return "Please Enter Name";
    //     }
    //     if(value.length <= 3){
    //         return "Name To Short";
    //     }
    //     if(value.length >= 25){
    //         return "Name To Big";
    //     }
    //     return false;
    // }

    // if(nameField === "mobile") {
    //     if(typeof(value) !== number){
    //         return "Please Enter Valid Number";
    //     }
    //     if(value === ""){
    //         return "Please Enter Mobile Number";
    //     }
    //     if((value).toString().length !== 10){
    //         return "Mobile Number Must Be Of 10 Digits";
    //     }
    //     return false;
    // }

    // if(nameField === "pincode") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid PinCode";
    //     }
    //     if(value === ""){
    //         return "Please Enter PinCode";
    //     }
    //     if((value).toString().length !== 6){
    //         return "PinCode Must Be Of 6 Digits";
    //     }
    //     return false;
    // }
        
    // if(nameField === "address") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid Address";
    //     }
    //     if(value === ""){
    //         return "Please Enter Address";
    //     }
    //     return false;
    // }
            
    // if(nameField === "town") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid town";
    //     }
    //     if(value === ""){
    //         return "Please Enter town";
    //     }
    // }

    // if(nameField === "city") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid City";
    //     }
    //     if(value === ""){
    //         return "Please Enter City";
    //     }
    // }

    // if(nameField === "state") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid State";
    //     }
    //     if(value === ""){
    //         return "Please Enter State";
    //     }
    // }   
// }

// export const name = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid Name"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Name"};
//     }
//     if(value.length <= 3){
//         return {error: true, message: "Name To Short"};
//     }
//     if(value.length >= 25){
//         return {error: true, message: "Name To Big"};
//     }
//     return false;
// }

// export const mobile = (value) => {
//     if(typeof(value) !== number){
//         return {error: true, message: "Please Enter Valid Number"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Mobile Number"};
//     }
//     if((value).toString().length !== 10){
//         return {error: true, message: "Mobile Number Must Be Of 10 Digits"};
//     }
//     return false;
// }

// export const pincode = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid PinCode"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter PinCode"};
//     }
//     if((value).toString().length !== 6){
//         return {error: true, message: "PinCode Must Be Of 6 Digits"};
//     }
//     return false;
// }

// export const address = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid Address"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Address"};
//     }
//     return false;
// }

// export const town = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid Address"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Address"};
//     }
// }

// export const city = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid City"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter City"};
//     }
// }

// export const state = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid State"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter State"};
// }
