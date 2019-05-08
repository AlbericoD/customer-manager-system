import React, { FunctionComponent } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Requiments } from '../components/any';
import { requirements } from './content-box';
const { Group } = Segment;
export const SplashBox: FunctionComponent = () => (
  <Group>
    <Segment>
      <Header as='h2'>Acruxx</Header>
    </Segment>
    {requirements.map((requirement, index) => (
      <Segment key={index}>
        <Requiments title={requirement.title}>{requirement.children}</Requiments>
      </Segment>
    ))}
  </Group>
);
