import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Mode } from 'Theme';
import Base from '__stories__/Base';
import UserInfo from 'components/molecules/UserInfo';

const name = 'Yamada';

storiesOf('components/molecules', module).add('UserInfo', () => {
  return (
    <Base>
      <UserInfo name={name} mode={Mode[0]} onSignout={action('onSignout')} />
    </Base>
  );
});
