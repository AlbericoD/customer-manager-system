import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Button, Menu, Icon, Modal, Header } from 'semantic-ui-react';

export interface IMenuAction {
  name: string;
  element: string;
  icon: any;
  sizeModal: any;
  header: string;
  buttonOK?: string;
  buttonOKType?: string;
  buttonCancel: string;
  children: ReactNode;
}

export const MenuAction: FunctionComponent<IMenuAction> = ({
  name,
  icon,
  element,
  sizeModal,
  header,
  buttonOK,
  buttonOKType,
  buttonCancel,
  children
}): JSX.Element => {
  const [open, toggle] = useState<boolean>(false);

  return (
    <>
      <Modal
        trigger={
          <Menu.Item as={element}>
            <Icon name={icon} />
            {name}
          </Menu.Item>
        }
        open={open}
        onOpen={() => toggle(true)}
        onClose={() => toggle(false)}
        basic
        size={sizeModal}>
        <Header icon='user' content={header} />
        <Modal.Content>{children}</Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => toggle(false)}>
            <Icon name='remove' /> {buttonCancel}
          </Button>
          {buttonOK ? (
            <Button color='green' inverted type={buttonOKType}>
              <Icon name='checkmark' /> {buttonOK}
            </Button>
          ) : null}
        </Modal.Actions>
      </Modal>
    </>
  );
};
