import React, { FunctionComponent, ReactNode, useState, useEffect } from 'react';
import { Container, Progress, Button, Menu, Sidebar, Grid, Icon } from 'semantic-ui-react';
import { MenuAction, FindUser } from '../components/any';
import { menuActions, links } from './content-box';
import * as Layout from '../components/layout';

interface ILayoutBox {
  percent: number;
  children: ReactNode;
}

export const LayoutBox: FunctionComponent<ILayoutBox> = ({ percent, children }) => {
  const [visible, toggle] = useState<boolean>(false);
  useEffect(() => {
    if (percent === 100) toggle(true);
  }, [percent]);
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Layout.Header brand='Albérico Dias' appName='customer control restaurant' />
      {percent < 100 ? (
        <div style={{ marginTop: '2.8em' }}>
          <Progress size='tiny' percent={percent} indicating progress />
        </div>
      ) : null}

      <Sidebar.Pushable style={{ marginTop: '2.8em', flex: 1 }}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => toggle(false)}
          vertical
          visible={visible}
          width='thin'>
          <Menu.Item as='h4'>Customer</Menu.Item>
          {menuActions.map((action, index) => (
            <MenuAction
              key={index}
              element={action.element}
              name={action.name}
              header={action.header}
              icon={action.icon}
              buttonOK={action.buttonOK}
              buttonOKType={action.buttonOKType}
              buttonCancel={action.buttonCancel}
              sizeModal={action.sizeModal}>
              {action.children}
            </MenuAction>
          ))}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Container style={{ marginTop: '2.5em' }}>
            {percent >= 100 && (
              <Grid columns='two' divided>
                <Grid.Row>
                  <Grid.Column>
                    <Button color='linkedin' disabled={visible} onClick={() => toggle(true)}>
                      <Icon name='settings' />
                      &nbsp;Manager
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <FindUser />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            )}
            {children}
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Layout.Footer links={links} />
    </div>
  );
};
