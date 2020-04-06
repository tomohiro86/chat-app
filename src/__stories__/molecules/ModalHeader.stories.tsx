import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Base from '__stories__/Base';
import ModalHeader from 'components/molecules/ModalHeader';

storiesOf('components/molecules', module).add('ModalHeader', () => {
  return (
    <Base>
      <ModalHeader title="モーダル" onClick={action('onClick')} />
    </Base>
  );
});
