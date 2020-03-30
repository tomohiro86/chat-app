import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Styled } from 'sc/atoms/OptionalLabel';

const OptionalLabel: React.FC = (props) => {
  const { ...rest } = props;
  const { t } = useTranslation();

  return <Styled.OptionalLabel {...rest}>{t('common.form.isOptional')}</Styled.OptionalLabel>;
};

export default OptionalLabel;
