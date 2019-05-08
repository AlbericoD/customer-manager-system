import {
  ICustomer,
  listCustomers,
  AppState,
  loadRemote,
  resetForm,
  toggleSuccess,
  appendErrors,
  appendFindCustomers
} from '../store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

interface IResponse {
  success: boolean;
  errors: string[];
}
interface IResponseList extends IResponse {
  data: ICustomer[];
}
interface IResponseCreate extends IResponse {
  data: null;
  message: string;
}

export class CustomerService {
  private readonly api: URL = new URL('http://127.0.0.1:8080/api/customers');
  private static _instance: CustomerService = new CustomerService();
  static get instance(): CustomerService {
    return CustomerService._instance;
  }
  public list(): ThunkAction<void, AppState, {}, AnyAction> {
    return async dispach => {
      const init: RequestInit = {
        headers: this._makeHeader(),
        body: null,
        method: 'GET',
        mode: 'cors'
      };
      try {
        //@ts-ignore
        const response = await this._api<IResponseList>(this.api, init);
        const { success, data } = response;
        if (success) {
          dispach(listCustomers(data));
          return data;
        } else {
          throw new Error('there are no registered customers');
        }
      } catch (error) {
        console.log(error);
      }
    };
  }

  public createCustomer(): ThunkAction<void, AppState, {}, AnyAction> {
    return async (dispatch, store) => {
      dispatch(loadRemote(true));
      const { customer, customers } = store().customerReducer;
      const init: RequestInit = {
        headers: this._makeHeader(),
        body: JSON.stringify(customer),
        method: 'POST',
        mode: 'cors'
      };
      try {
        //@ts-ignore
        const response = await this._api<IResponseCreate>(this.api, init);
        dispatch(loadRemote(false));
        const { success } = response;
        if (!success) throw new Error(response.message);
        dispatch(resetForm());
        dispatch(toggleSuccess(success));
        dispatch(listCustomers([...customers, customer]));
      } catch (error) {
        console.error(error);
        dispatch(loadRemote(false));
        dispatch(appendErrors(true));
      }
    };
  }
  public deleteCustomer(doc: string): ThunkAction<void, AppState, {}, AnyAction> {
    return async (dispatch, store) => {
      const { customers } = store().customerReducer;
      dispatch(loadRemote(true));
      const init: RequestInit = {
        headers: this._makeHeader(),
        body: JSON.stringify({ doc }),
        method: 'DELETE',
        mode: 'cors'
      };
      try {
        //@ts-ignore
        await this._api<IResponseCreate>(this.api, init);
        dispatch(loadRemote(false));
        dispatch(listCustomers(customers.filter(customer => customer.doc !== doc)));
      } catch (error) {
        dispatch(loadRemote(false));
      }
    };
  }
  public searchCustomer(value: string): ThunkAction<void, AppState, {}, AnyAction> {
    return async dispatch => {
      dispatch(loadRemote(true));
      const init: RequestInit = {
        headers: this._makeHeader(),
        method: 'GET',
        mode: 'cors'
      };
      try {
        //@ts-ignore
        const response = await this._api<IResponseList>(`${this.api}/search/${value}`, init);
        const { success } = response;
        dispatch(loadRemote(false));
        if (success) dispatch(appendFindCustomers(response.data));
      } catch (error) {
        dispatch(loadRemote(false));
      }
    };
  }

  private _api<T>(url: string, option?: RequestInit): Promise<T> {
    return fetch(url, option).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
  }
  private _makeHeader(): Headers {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return headers;
  }
}
