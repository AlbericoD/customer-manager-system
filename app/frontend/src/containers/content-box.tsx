import React from 'react';
import { IMenuAction, IRequiments, FindUser, IUser, CreateUser } from '../components/any';
import { IFooter } from '../components/layout';
import { List } from 'semantic-ui-react';
import faker from 'faker';
import _ from 'lodash';

// const { Item } = List;

export const users: IUser[] = _.times(10, num => ({
  avatar: faker.internet.avatar(),
  name: faker.name.title(),
  doc:
    num % 2 === 0
      ? faker.helpers.replaceSymbolWithNumber('###########')
      : faker.helpers.replaceSymbolWithNumber('##############'),
  phone: faker.phone.phoneNumberFormat(1),
  email: faker.internet.email(),
  cel: faker.phone.phoneNumberFormat(2)
}));
export const menuActions: IMenuAction[] = [
  {
    header: 'Search ...',
    name: 'Find',
    element: 'a',
    icon: 'search',
    sizeModal: 'small',
    buttonCancel: 'Cancel',
    children: <FindUser />
  },
  {
    header: 'Create User',
    name: 'New',
    element: 'a',
    icon: 'add user',
    sizeModal: 'small',
    buttonCancel: 'Cancel',
    children: <CreateUser />
  }
];

export const links: IFooter[] = [
  { href: 'https://github.com/AlbericoD', text: 'GitHub' },
  { href: 'https://www.npmjs.com/~alberico', text: 'NPM' },
  { href: 'https://albericod.github.io/project/#/', text: 'Site Map' },
  { href: 'https://www.linkedin.com/in/albericod/', text: 'Contact' },
  {
    href: 'https://albericod.github.io/project/#/twitch-extension/terms-of-service',
    text: 'Terms and Conditions'
  },
  {
    href: 'https://albericod.github.io/project/#/twitch-extension/privacy-policy',
    text: 'Privacy Policy'
  }
];

const list: string[] = [
  'Gravar cliente (CPF/CNPJ deve ser único).',
  'Quando for pessoa física deve preencher CPF e quando for jurídica CNPJ.',
  'Consultar cliente',
  'Deletar cliente'
];
export const requirements: IRequiments[] = [
  {
    title: 'Project Dev Full Stack',
    children: <p>Desenvolver aplicação com Frontend (React e Redux) e Backend (PHP ou NodeJS).</p>
  },
  {
    title: 'História de usuário',
    children: (
      <p>
        Eu como gerente do restaurante de Santa Bárbara d’Oeste gostaria de cadastrar todos os
        clientes que fazem pedidos para entrega.
      </p>
    )
  },
  {
    title: 'Requisitos',
    children: (
      <List bulleted>
        {list.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    )
  }
];
