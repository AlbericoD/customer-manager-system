import { ICustomer, IResponse } from './types';
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
export function setName(name: string) {
  return {
    type: SET_INPUT_NAME,
    payload: name
  };
}
export function setDoc(doc: string) {
  return {
    type: SET_INPUT_DOC,
    payload: doc
  };
}
export function setPhone(phone: string) {
  return {
    type: SET_INPUT_PHONE,
    payload: phone
  };
}
export function setCel(cel: string) {
  return {
    type: SET_INPUT_CEL,
    payload: cel
  };
}
export function setEmail(email: string) {
  return {
    type: SET_INPUT_EMAIL,
    payload: email
  };
}
export function setCustomers(customers: ICustomer[]) {
  return {
    type: GET_REMOTE,
    payload: customers
  };
}
export function toogleLoadRemote(load: boolean) {
  return {
    type: LOAD_REMOTE,
    payload: load
  };
}

export function resetCustomers(reset: ICustomer & IResponse) {
  return {
    type: RESET_FORM,
    payload: reset
  };
}
export function reponseRemote(response: IResponse) {
  return {
    type: SEND_REMOTE,
    payload: response
  };
}
export function toggleSuccess(success: boolean) {
  return {
    type: TOGGLE_SUCCESS,
    payload: success
  };
}
export function appendErrors(errors: boolean) {
  return {
    type: APPEND_ERRORS,
    payload: errors
  };
}

export function setCustomer(customer: ICustomer) {
  return {
    type: SET_CUSTOMER,
    payload: customer
  };
}

export function appendFindCustomers(customers: ICustomer[]) {
  return {
    type: SEARCH_CUSTOMER,
    payload: customers
  };
}
