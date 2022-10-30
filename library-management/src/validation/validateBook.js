export const ValidateBook = (body) => {
  let success = true;
  let error = {};
  // let num = /^\(?([0-9]))$/;
  if (!body.book) {
    success = false;
    error.book = "Please enter Book Name";
  }
  else if (!body.author) {
    success = false;
    error.author = "Please enter Author Name";
  }
  else if (!body.totalBook && !body.totalBook < 0) {
    success = false;
    error.totalBook = "Please enter Books Count";
  }
  else{
    success = true;
  }
  return { success, error }
}