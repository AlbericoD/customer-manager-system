import React, { FunctionComponent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { AppState, setPhone } from '../../store';

interface IStateToProps {
  phone: string;
}
interface DispachProps {
  set: (value: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cel') => void;
}
type Props = DispachProps & IStateToProps;

const Input: FunctionComponent<Props> = ({ phone, set }) => (
  <Form.Input
    value={phone}
    label='Phone'
    type='tel'
    minLength={12}
    maxLength={13}
    pattern={'[0-9]{2,}[-][0-9]{4}[-][0-9]{4}'}
    placeholder='###-####-####'
    onChange={e => set(e, 'phone')}
  />
);

const mapStateToProps = (state: AppState): IStateToProps => ({
  phone: state.customerReducer.customer.phone
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    set: (value: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cel') => {
      dispatch(setPhone(value, type));
    }
  };
};
export const Phone = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
