const signIn = (email, password) => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: token,
        email: email,
        name: 'Glover Olaoluwa',
      });
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
