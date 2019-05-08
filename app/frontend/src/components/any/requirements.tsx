import React, { FunctionComponent, ReactNode } from 'react';
import { Segment, Header } from 'semantic-ui-react';
export interface IRequiments {
  title: string;
  children: ReactNode;
}
export const Requiments: FunctionComponent<IRequiments> = ({ title, children }): JSX.Element => (
  <>
    <Header as='h3'>{title}</Header>
    <Segment>{children}</Segment>
  </>
);
