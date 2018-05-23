export const POST_LOGIN = 'Awanza/login/LOAD';
export const POST_LOGIN_SUCCESS = 'Awanza/login/LOAD_SUCCESS';
export const POST_LOGIN_FAIL = 'Awanza/login/LOAD_FAIL';

export default function reducer(state =
  {
    apiResponse: [],
    apiResponseNew: [],
    loginResponse: [],
  }, action) {

  switch (action.type) {
    //Start API call
    case POST_LOGIN:
      return { ...state, loading: true };

    // Get Response of API
    case POST_LOGIN_SUCCESS:
      console.log("Inside Success",action.payload.data);
      if(action.payload.data.status===1){
            return {
              ...state,
              loading: false,
              sessionData: action.payload.data.data.sessionData,
              role_menu: action.payload.data.data.role_menu,
              user_name:action.payload.data.data.name,
              status:action.payload.data.status,
              message:action.payload.data.message
             };
      }else{
          return { ...state, loading: false, error: action.payload.data.message,status:action.payload.data.status,message:action.payload.data.message };
      }

      // API Error
    case POST_LOGIN_FAIL:
      return {...state, loading: false, error: "Error in login api."};

    default:
      return state;
  }
}

export function loginAPI(inEmail, inPassword) {
  return {
    type: POST_LOGIN,
    payload: {
      request: {
        method: 'POST',
        url: 'login',
        params: {
          "email": inEmail,
          "password": inPassword,
          "device_token": "deviceTokenawerqerqerqw",
          "endpointArn": "endPointARNasdasdasdasd"
        }
      }
    }
  };
}
