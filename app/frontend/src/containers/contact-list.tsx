import React, { FunctionComponent, useEffect } from 'react';
import { Table, Container, Transition } from 'semantic-ui-react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AppState, ICustomer } from '../store';
import { CustomerService } from '../services';
import { ConfirmRemove } from '../components/any';
interface IStateToProps {
  customers: ICustomer[];
  selected: ICustomer;
}
interface DispachProps {
  list: () => void;
  remove: (doc: string) => void;
}
type Props = DispachProps & IStateToProps;
const ContactList: FunctionComponent<Props> = (props): JSX.Element => {
  const { list } = props;
  useEffect(() => {
    list();
  }, [list]);
  return (
    <Container>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>CPF / CNPJ</Table.HeaderCell>
            <Table.HeaderCell colSpan='3'>Contacts</Table.HeaderCell>
            <Table.HeaderCell colSpan='2'>Actions</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Telephone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Cel</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Transition.Group as={Table.Body} animation='fade' duration={600}>
          {props.customers
            .map(customer => (
              <Table.Row key={customer.doc}>
                <Table.Cell>{customer.name}</Table.Cell>
                <Table.Cell>{customer.doc.length === 14 ? 'Física' : 'Jurídica'}</Table.Cell>
                <Table.Cell textAlign='right'>{customer.doc}</Table.Cell>
                <Table.Cell textAlign='right'>{customer.phone}</Table.Cell>
                <Table.Cell textAlign='right'>{customer.email}</Table.Cell>
                <Table.Cell textAlign='right'>{customer.cel}</Table.Cell>
                <Table.Cell textAlign='center'>
                  <ConfirmRemove
                    remove={props.remove.bind(null, customer.doc)}
                    name={customer.name}
                  />
                </Table.Cell>
              </Table.Row>
            ))
            .filter(customer =>
              props.selected.doc !== undefined && props.selected.doc.length
                ? customer.key === props.selected.doc
                : customer.key
            )}
        </Transition.Group>
      </Table>
    </Container>
  );
};
const mapStateToProps = (state: AppState): IStateToProps => ({
  customers: state.customerReducer.customers,
  selected: state.customerReducer.selected
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    list: () => {
      dispatch(CustomerService.instance.list());
    },
    remove: (doc: string) => {
      dispatch(CustomerService.instance.deleteCustomer(doc));
    }
  };
};
export const ContactListBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
