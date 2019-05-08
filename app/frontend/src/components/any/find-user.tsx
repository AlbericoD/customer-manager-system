import React, { FunctionComponent, useState } from 'react';
import { Search } from 'semantic-ui-react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AppState, setSelectedCustomer, ICustomer } from '../../store';
import { CustomerService } from '../../services';
import _ from 'lodash';

interface IStateToProps {
  customer: ICustomer;
  customers: ICustomer[];
}
interface DispachProps {
  selected: (customer: ICustomer) => void;
  search: (value: string) => void;
}
type Props = DispachProps & IStateToProps;

export interface IUser {
  avatar: string;
  name: string;
  doc: string;
  phone: string;
  email: string;
  cel: string;
}

//semantic ui tem um erro com o search component e props com bind
interface ITransformToSemanticSearch {
  id: number;

  title: string;
  description: string;
  price: string;
}
const transform = (users: IUser[]): ITransformToSemanticSearch[] =>
  users.map(
    (user, index): ITransformToSemanticSearch => ({
      id: index,
      title: user.name,
      description: user.email,
      price: user.doc
    })
  );

const Find: FunctionComponent<Props> = ({ selected, customer, customers, search }): JSX.Element => {
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const initialState = () => {
    toggleLoading(false);
    setValue('');
    selected({ avatar: '', cel: '', doc: '', email: '', name: '', phone: '' });
  };
  const handleResultSelect = (e: any, { result }: any) => {
    setValue(result.title);

    selected({
      avatar: '',
      cel: '',
      doc: result.price,
      email: result.description,
      name: result.title,
      phone: ''
    });
  };

  const handleSearchChange = (e: any, { value }: any) => {
    toggleLoading(true);
    setValue(value);
    setTimeout(() => {
      if (value.length < 1) {
        return initialState();
      }
      search(value);
      toggleLoading(false);
    }, 300);
  };
  return (
    <Search
      minCharacters={2}
      size='small'
      fluid
      loading={isLoading}
      onResultSelect={handleResultSelect}
      onSearchChange={_.debounce(handleSearchChange, 500, {
        leading: true
      })}
      results={transform(customers)}
      value={value}
    />
  );
};
const mapStateToProps = (state: AppState): IStateToProps => ({
  customer: state.customerReducer.selected,
  customers: state.customerReducer.resultFind
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    selected: (customer: ICustomer) => {
      dispatch(setSelectedCustomer(customer));
    },
    search: (value: string) => {
      dispatch(CustomerService.instance.searchCustomer(value));
    }
  };
};
export const FindUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Find);
