import React from 'react';
import { useTranslation } from 'react-i18next';
import { Styled } from 'sc/molecules/UserInfo';

interface Props {
  name: string | null;
  mode: string;
  onSignout: () => void;
}

const UserInfo: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { name, mode, onSignout, ...rest } = props;
  return (
    <Styled.Wrapper {...rest}>
      {name && <Styled.UserName mode={mode}>{name}</Styled.UserName>}
      <Styled.Signout onClick={onSignout}>
        <Styled.StyleIconSignout mode={mode} />
        <Styled.SignoutLabel mode={mode}>{t('common.signout')}</Styled.SignoutLabel>
      </Styled.Signout>
    </Styled.Wrapper>
  );
};

export default UserInfo;
