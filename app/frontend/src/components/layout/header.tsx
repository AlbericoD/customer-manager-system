import React, { FunctionComponent } from 'react';
import { Menu, Container } from 'semantic-ui-react';

const { Item } = Menu;

export interface IHeader {
  brand: string;
  appName: string;
}
export const Header: FunctionComponent<IHeader> = ({ brand, appName }): JSX.Element => (
  <Menu fixed='top' inverted>
    <Container>
      <Item header>{brand}</Item>
      <Item as='p'>{appName}</Item>
    </Container>
  </Menu>
);
