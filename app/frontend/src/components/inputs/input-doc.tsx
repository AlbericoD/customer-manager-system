import React, { FunctionComponent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { AppState, setDoc } from '../../store';

interface IStateToProps {
  doc: string;
}
interface DispachProps {
  set: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
type Props = DispachProps & IStateToProps;

const Input: FunctionComponent<Props> = ({ doc, set }) => (
  <Form.Input
    value={doc}
    required
    minLength={14}
    maxLength={18}
    pattern={
      '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
    }
    label='CPF/CNPJ'
    type='text'
    placeholder='###.###.####-## | ##.###.###/####-##'
    onChange={e => set(e)}
  />
);

const mapStateToProps = (state: AppState): IStateToProps => ({
  doc: state.customerReducer.customer.doc
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    set: (value: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setDoc(value));
    }
  };
};
export const Doc = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
