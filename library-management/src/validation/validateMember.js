export const ValidateMember = (body) => {
    let success = true;
    let error = {};
    let mailFormat = /\S+@\S+\.\S+/;
    let phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!body.username) {
        success = false;
        error.userName = "User name is required";
    }
    else if (!body.pass) {
        success = false;
        error.pass = "Password is required";
      }
      else if (!body.email) {
        success = false;
        error.email = "Please enter your email";
      }
      else if(!mailFormat.test(body.email)){
        success = false;
        error.email = "Please enter correct email";
      }
      else if (!body.phone) {
        success = false;
        error.phone = "Please enter your phone";
      }
      else if (!body.phone.match(phoneFormat)) {
        success = false;
        error.phone = "Please enter correct phone";
      }
      
      else if (!body.country) {
        success = false;
        error.country = "Please select your Country";
      }
      else if (!body.city) {
        success = false;
        error.city = "Please enter your City";
      }
      else if (!body.state) {
        success = false;
        error.state = "Please enter your State";
      }
      else if (!body.zip) {
        success = false;
        error.zip = "Please enter Zip Code";
      }
    return {success, error}
}