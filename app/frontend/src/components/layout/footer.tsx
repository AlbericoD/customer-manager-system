import React, { FunctionComponent } from 'react';
import { Segment, List, Container } from 'semantic-ui-react';

const { Item } = List;
export interface IFooter {
  href: string;
  text: string;
}
interface IProps {
  links: IFooter[];
}
export const Footer: FunctionComponent<IProps> = ({ links }): JSX.Element => (
  <Segment inverted vertical style={{ padding: '0.7em 0em', flex: 'none' }}>
    <Container textAlign='center'>
      <List horizontal inverted divided link size='small'>
        {links.map((item, index) => (
          <Item key={index} as='a' href={item.href} target='__blank'>
            {item.text}
          </Item>
        ))}
      </List>
    </Container>
  </Segment>
);
