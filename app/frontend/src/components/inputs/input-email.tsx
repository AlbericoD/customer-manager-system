import React, { FunctionComponent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { AppState, setEmail } from '../../store';

interface IStateToProps {
  email: string;
}
interface DispachProps {
  set: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
type Props = DispachProps & IStateToProps;

const Input: FunctionComponent<Props> = ({ email, set }) => (
  <Form.Input
    label='Email'
    type='email'
    placeholder='customer@customer'
    value={email}
    onChange={e => set(e)}
  />
);

const mapStateToProps = (state: AppState): IStateToProps => ({
  email: state.customerReducer.customer.email
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    set: (value: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setEmail(value));
    }
  };
};
export const Email = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
