

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_LOGOUT = 'SET_LOGOUT';//not used
const SET_EMAIL = 'SET_EMAIL';
const SET_NICENAME = 'SET_NICENAME';
const SET_DISPLAYNAME = 'SET_DISPLAYNAME';
const SET_TOKEN = 'SET_TOKEN';

export function loginCtrl(email,displayname,nicename,token, error) {
  // console.log(email,displayname,nicename,token, error)
  return dispatch => {
    if (error) {
      dispatch(setLoginError(error));
    } else {
      dispatch(setLoginSuccess(true));
      dispatch(setEmail(email));
      dispatch(setDisplayname(displayname));
      dispatch(setNicename(nicename));
      dispatch(setToken(token));
      dispatch(setLoginError(false));
    }
    //  });
  }
}


export function logoutCtrl() {
    return dispatch => {
    dispatch(setLogout(true));
    dispatch(setLoginSuccess(false));
    }
}

export function firstToken(token) {
  console.log("run")
  return dispatch => {
    dispatch(setToken(token));
  }
}

function setLogout(isLogout) {
  return {
    type: SET_LOGOUT,
    isLogout
  };
}


function setEmail(isEmail) {
  return {
    type: SET_EMAIL,
    isEmail
  };
}


function setNicename(isNicename) {
  return {
    type: SET_NICENAME,
    isNicename
  };
}

function setDisplayname(isDisplayname) {
  return {
    type: SET_DISPLAYNAME,
    isDisplayname
  };
}

 function setToken(isToken) {
  return {
    type: SET_TOKEN,
    isToken
  };
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };

}



function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

//TODO -- coming to delete
function callLoginApi(email, password, callback) {
  // setTimeout(() => {
  if (email === '1' && password === '1') {
    return callback(null);
    //   return alert('ok man');
  } else {
    alert("error");
    return callback(new Error('Invalid email and password'));
    // return callback(alert('Invalid email and password'));
  }
  // }, 1000);
}

export default function reducer(
  state = {
  isLoginSuccess: false,
  isLoginPending: false,
  isEmail: "",
  isDisplayname: "",
  isToken: "",
  isNicename: "",
  isLogout: false,
  loginError: null
}, action) 
{
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });


    case SET_EMAIL:
      return Object.assign({}, state, {
        isEmail: action.isEmail
      });

    case SET_NICENAME:
      return Object.assign({}, state, {
        loginError: action.isNicename
      });

    case SET_DISPLAYNAME:
      return Object.assign({}, state, {
        isDisplayname: action.isDisplayname
      });

    case SET_TOKEN:
      return Object.assign({}, state, {
        isToken: action.isToken
      });



    case SET_LOGOUT:
      return Object.assign({}, state, {
        isLogout: action.isLogout
      });

    default:
      return state;
  }
}
