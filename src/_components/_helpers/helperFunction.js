export const helperFunction = {
  isUserAlreadyExist: (obj, userArray) => {
    let isUserExist = false;
    if (userArray.length > 0) {
      for (let i = 0; i < userArray.length; i++) {
        if (
          userArray[i].email === obj.email ||
          userArray[i].contact === obj.contact
        ) {
          isUserExist = true;
        }
      }
      return isUserExist;
    }
    return isUserExist;
  },

  isLoggedInUserExist: (userObj, userArrays) => {
    let isLoggedInUser = {
      isUserExist: false,
      userInfo: {},
    };
    if (userArrays.length > 0) {
      for (let i = 0; i < userArrays.length; i++) {
        if (
          userArrays[i].email === userObj.email &&
          userArrays[i].password === userObj.password
        ) {
          isLoggedInUser = {
            isUserExist: true,
            userInfo: userArrays[i],
          };
        }
      }
      return isLoggedInUser;
    }
    return isLoggedInUser;
  },
};
