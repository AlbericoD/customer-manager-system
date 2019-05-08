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
  SEARCH_CUSTOMER,
  SET_CUSTOMER
} from './constants';

export interface IResponse {
  load: boolean;
  success: boolean;
  errors: boolean;
}
export interface ICustomer {
  avatar: string;
  name: string;
  doc: string;
  phone: string;
  email: string;
  cel: string;
}

export interface IState {
  response: IResponse;
  customers: ICustomer[];
  customer: ICustomer;
  selected: ICustomer;
  resultFind: ICustomer[];
}

interface ISetName {
  type: typeof SET_INPUT_NAME;
  payload: string;
}
interface ISetDoc {
  type: typeof SET_INPUT_DOC;
  payload: string;
}
interface ISetPhone {
  type: typeof SET_INPUT_PHONE;
  payload: string;
}
interface ISetCel {
  type: typeof SET_INPUT_CEL;
  payload: string;
}

interface ISetEmail {
  type: typeof SET_INPUT_EMAIL;
  payload: string;
}
interface IGetCustomers {
  type: typeof GET_REMOTE;
  payload: ICustomer[];
}
interface ISendRemote {
  type: typeof SEND_REMOTE;
  payload: IResponse;
}
interface IResetForm {
  type: typeof RESET_FORM;
  payload: ICustomer & IResponse;
}
interface ILoadRemote {
  type: typeof LOAD_REMOTE;
  payload: boolean;
}
interface IToggleSucess {
  type: typeof TOGGLE_SUCCESS;
  payload: boolean;
}
interface ISetErrors {
  type: typeof APPEND_ERRORS;
  payload: boolean;
}
interface ISelected {
  type: typeof SET_CUSTOMER;
  payload: ICustomer;
}

interface IResultFind {
  type: typeof SEARCH_CUSTOMER;
  payload: ICustomer[];
}

export type CustomerActionsType =
  | ISetName
  | ISetDoc
  | ISetPhone
  | ISetCel
  | ISetEmail
  | IGetCustomers
  | ISendRemote
  | IResetForm
  | ILoadRemote
  | IToggleSucess
  | ISetErrors
  | ISelected
  | IResultFind;
