import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Base from '__stories__/Base';
import Title from '__stories__/Title';
import Separator from '__stories__/Separator';
import Button from 'components/atoms/Button';

storiesOf('components/atoms', module).add('Button', () => {
  return (
    <StyleBase>
      <Separator>
        <Title>Primary</Title>
        <Button type="button" theme="primary" label="ボタン" onClick={action('onClick')} />
      </Separator>
      <Separator>
        <Title>Default</Title>
        <Button type="button" label="ボタン" onClick={action('onClick')} />
      </Separator>
    </StyleBase>
  );
});

const StyleBase = styled(Base)`
  background-color: #f6f6f6;
`;
