import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Base from '__stories__/Base';
import ModalCreateChannel from 'components/organisms/ModalCreateChannel';

storiesOf('components/organisms', module).add('ModalCreateChannel', () => {
  return (
    <Base>
      <ModalCreateChannel onCreateChannel={action('onCreateChannel')} />
    </Base>
  );
});
