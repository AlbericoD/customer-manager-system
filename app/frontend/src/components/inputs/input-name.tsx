import React, { FunctionComponent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { AppState, setName } from '../../store';

interface IStateToProps {
  name: string;
}
interface DispachProps {
  set: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
type Props = DispachProps & IStateToProps;

const Input: FunctionComponent<Props> = ({ name, set }) => (
  <Form.Input
    required
    label='Name'
    type='text'
    placeholder='customer name'
    value={name}
    onChange={e => set(e)}
  />
);

const mapStateToProps = (state: AppState): IStateToProps => ({
  name: state.customerReducer.customer.name
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    set: (value: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setName(value));
    }
  };
};
export const Name = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
