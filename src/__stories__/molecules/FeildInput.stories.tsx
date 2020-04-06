import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Base from '__stories__/Base';
import FieldInput from 'components/molecules/FieldInput';

storiesOf('components/molecules', module).add('FieldInput', () => {
  return (
    <Base>
      <FieldInput
        isOptional={true}
        type="email"
        name="email"
        value=""
        label="Email"
        errorMessage=""
        placeholder="emailを入力してください"
        onChange={action('onChange')}
      />
    </Base>
  );
});
