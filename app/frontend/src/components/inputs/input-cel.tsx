import React, { FunctionComponent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { AppState, setCel } from '../../store';

interface IStateToProps {
  cel: string;
}
interface DispachProps {
  set: (value: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cel') => void;
}
type Props = DispachProps & IStateToProps;

const Input: FunctionComponent<Props> = ({ cel, set }) => (
  <Form.Input
    value={cel}
    label='Cel'
    type='text'
    minLength={13}
    maxLength={14}
    pattern={'[0-9]{2,}[-][0-9]{5}[-][0-9]{4}'}
    placeholder='################'
    onChange={e => set(e, 'cel')}
  />
);

const mapStateToProps = (state: AppState): IStateToProps => ({
  cel: state.customerReducer.customer.cel
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    set: (value: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cel') => {
      dispatch(setCel(value, type));
    }
  };
};
export const Cel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
