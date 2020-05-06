// import Cookies from 'js-cookie';
import { LOGIN_SUCCESS, LOGOUT, AuthActionTypes } from './action.types';

export interface IAuthState {
  user?: {
    displayUsername: string;
  };
}

const initialState: IAuthState = {
  user: undefined,
};

const reducer = (
  state: IAuthState = initialState,
  action: AuthActionTypes,
): IAuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          displayUsername: action.username,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;