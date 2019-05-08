import React, { FunctionComponent, useState } from 'react';
import { Confirm, Button, Icon } from 'semantic-ui-react';

export interface IConfirmRemove {
  remove: () => void;
  name: string;
}
export const ConfirmRemove: FunctionComponent<IConfirmRemove> = ({ remove, name }) => {
  const [open, toggle] = useState<boolean>(false);
  return (
    <>
      <Button color='youtube' onClick={() => toggle(true)}>
        <Icon name={'remove user'} />
      </Button>
      <Confirm
        open={open}
        onCancel={() => toggle(false)}
        onConfirm={remove}
        content={`Delete Customer: ${name} ?`}
      />
    </>
  );
};
