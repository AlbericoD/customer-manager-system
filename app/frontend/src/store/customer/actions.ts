import { ChangeEvent } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import * as creators from './creators';
import { ICustomer } from './types';

const clearmask = (doc: string): string => doc.replace(/(\.|\/|-)/g, '');
export const setName = (
  input: ChangeEvent<HTMLInputElement>
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.setName(input.target.value));
};
export const setDoc = (
  input: ChangeEvent<HTMLInputElement>
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  const { value } = input.target;
  const doc = clearmask(value);
  if (doc.length <= 11)
    dispatch(creators.setDoc(doc.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')));
  else if (doc.length > 11 && doc.length <= 14)
    dispatch(
      creators.setDoc(doc.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5'))
    );
  else dispatch(creators.setDoc(doc));
};
export const setPhone = (
  input: ChangeEvent<HTMLInputElement>,
  type: 'phone' | 'cel'
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  const { value } = input.target;
  const contact = clearmask(value);
  if (type === 'phone' && contact.length <= 11)
    dispatch(creators.setPhone(contact.replace(/(\d{2,})(\d{4})(\d{4})/g, '$1-$2-$3')));
  else dispatch(creators.setPhone(input.target.value));
};
export const setCel = (
  input: ChangeEvent<HTMLInputElement>,
  type: 'phone' | 'cel'
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  const { value } = input.target;
  const contact = clearmask(value);
  if (type === 'cel' && contact.length >= 11 && contact.length <= 13)
    dispatch(creators.setCel(contact.replace(/(\d{2,})(\d{5})(\d{4})/g, '$1-$2-$3')));
  else dispatch(creators.setCel(input.target.value));
};
export const setEmail = (
  input: ChangeEvent<HTMLInputElement>
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.setEmail(input.target.value));
};
export const listCustomers = (
  customers: ICustomer[]
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.setCustomers(customers));
};
export const resetForm = (): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(
    creators.resetCustomers({
      avatar: '',
      cel: '',
      doc: '',
      email: '',
      name: '',
      phone: '',
      errors: false,
      load: false,
      success: false
    })
  );
};
export const loadRemote = (
  load: boolean
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.toogleLoadRemote(load));
};

export const toggleSuccess = (
  success: boolean
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.toggleSuccess(success));
  setTimeout(() => {
    dispatch(creators.toggleSuccess(!success));
  }, 3500);
};
export const appendErrors = (
  errors: boolean
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.appendErrors(errors));
  setTimeout(() => {
    dispatch(creators.appendErrors(!errors));
  }, 4000);
};
export const setSelectedCustomer = (
  customer: ICustomer
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.setCustomer(customer));
};
export const appendFindCustomers = (
  customers: ICustomer[]
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.appendFindCustomers(customers));
};
