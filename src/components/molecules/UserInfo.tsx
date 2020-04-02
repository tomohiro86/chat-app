import React from 'react';
import { useTranslation } from 'react-i18next';
import { Styled } from 'sc/molecules/UserInfo';

interface Props {
  currentUser: firebase.User;
  onSignout: () => void;
}

const UserPanel: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { currentUser, onSignout, ...rest } = props;
  return (
    <Styled.Wrapper {...rest}>
      <Styled.UserName>{currentUser.displayName}</Styled.UserName>
      <Styled.Signout onClick={onSignout}>
        <Styled.StyleIconSignout />
        <Styled.SignoutLabel>{t('common.signout')}</Styled.SignoutLabel>
      </Styled.Signout>
    </Styled.Wrapper>
  );
};

export default UserPanel;
