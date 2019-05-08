import { IState, CustomerActionsType } from './types';
import {
  SET_INPUT_NAME,
  SET_INPUT_DOC,
  SET_INPUT_PHONE,
  SET_INPUT_CEL,
  SET_INPUT_EMAIL,
  GET_REMOTE,
  SEND_REMOTE,
  RESET_FORM,
  LOAD_REMOTE,
  TOGGLE_SUCCESS,
  APPEND_ERRORS,
  SET_CUSTOMER,
  SEARCH_CUSTOMER
} from './constants';
const customer = {
  name: '',
  doc: '',
  phone: '',
  cel: '',
  email: '',
  avatar: ''
};
const initialState: IState = {
  customer,
  customers: [],
  selected: customer,
  resultFind: [],
  response: {
    success: false,
    load: false,
    errors: false
  }
};

export function customerReducer(state = initialState, action: CustomerActionsType): IState {
  switch (action.type) {
    case SET_INPUT_NAME:
      return {
        ...state,
        customer: {
          ...state.customer,
          name: action.payload
        }
      };
    case SET_INPUT_DOC:
      return {
        ...state,
        customer: {
          ...state.customer,
          doc: action.payload
        }
      };
    case SET_INPUT_PHONE:
      return {
        ...state,
        customer: {
          ...state.customer,
          phone: action.payload
        }
      };
    case SET_INPUT_CEL:
      return {
        ...state,
        customer: {
          ...state.customer,
          cel: action.payload
        }
      };
    case SET_INPUT_EMAIL:
      return {
        ...state,
        customer: {
          ...state.customer,
          email: action.payload
        }
      };
    case LOAD_REMOTE:
      return {
        ...state,
        response: {
          ...state.response,
          load: action.payload
        }
      };
    case GET_REMOTE:
      return {
        ...state,
        customers: action.payload
      };
    case SEND_REMOTE:
      return {
        ...state,
        response: action.payload
      };
    case RESET_FORM:
      return {
        ...state,
        customer: action.payload,
        response: action.payload
      };
    case TOGGLE_SUCCESS:
      return {
        ...state,
        response: {
          ...state.response,
          success: action.payload
        }
      };
    case APPEND_ERRORS:
      return {
        ...state,
        response: {
          ...state.response,
          errors: action.payload
        }
      };
    case SET_CUSTOMER:
      return {
        ...state,
        selected: action.payload
      };
    case SEARCH_CUSTOMER:
      return {
        ...state,
        resultFind: action.payload
      };
    default:
      return state;
  }
}
