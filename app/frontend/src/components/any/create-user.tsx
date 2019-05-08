import React, { FunctionComponent, useEffect } from 'react';
import { Form, Button, Message, Icon, Transition } from 'semantic-ui-react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AppState, resetForm, IResponse } from '../../store';
import { CustomerService } from '../../services';
import * as Input from '../inputs';
import './create-user.css';

interface IStateToProps {
  response: IResponse;
}
interface DispachProps {
  send: () => void;
  reset: () => void;
}
type Props = DispachProps & IStateToProps;

const FormUser: FunctionComponent<Props> = ({ response, send, reset }): JSX.Element => {
  useEffect(() => {
    reset();
  }, [reset]);
  return (
    <>
      <Transition visible={response.success} animation='scale' duration={400}>
        <Message success header='done' content='customer successfully created' />
      </Transition>
      <Transition visible={response.errors} animation='scale' duration={550}>
        <Message error header='needs revision' content='customer already exists' />
      </Transition>
      <Transition visible={!response.load} animation='scale' duration={700}>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            e.stopPropagation();
            send();
          }}
          loading={response.load}
          success={response.success}
          error={response.errors}>
          <Input.Name />
          <Input.Doc />
          <Input.Phone />
          <Input.Cel />
          <Input.Email />
          <Button basic color='yellow' inverted type='reset' onClick={() => reset()}>
            <Icon name='checkmark' />
            Reset
          </Button>
          <Button color='green' inverted type='submit'>
            <Icon name='checkmark' />
            Create
          </Button>
        </Form>
      </Transition>
    </>
  );
};
const mapStateToProps = (state: AppState): IStateToProps => ({
  response: state.customerReducer.response
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    send: () => {
      dispatch(CustomerService.instance.createCustomer());
    },
    reset: () => {
      dispatch(resetForm());
    }
  };
};
export const CreateUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUser);
