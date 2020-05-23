import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, Redirect } from 'react-router-dom';
import firebase from 'firebaseConfig';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { setMe } from 'module/me/action';
import { setLogin } from 'module/login/action';
import { ROUTES } from 'routes';
import { Styled } from 'sc/pages/Signin';

interface ValuesIF {
  [key: string]: string;
}

interface ErrorIF {
  message: string;
}

const initialValues = {
  email: '',
  password: '',
};

const Signin: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();

  const isLogin = useSelector((state: State) => state.login.isLogin);
  const [values, setValues] = React.useState<ValuesIF>(initialValues);
  const [errors, setError] = React.useState<ErrorIF[]>([]);

  const isFormValid = () => {
    const newErrors: ErrorIF[] = [];
    let error;

    if (isFormEmpty(values)) {
      error = { message: t('signin.errors.emptyAll') };
      setError(newErrors.concat(error));
      return false;
    } else {
      return true;
    }
  };

  const isFormEmpty = (values: ValuesIF) => {
    return !values.email.length || !values.password.length;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    values[event.target.name] = event.target.value;
    setValues(Object.assign({}, values));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      setError([]);
      const newErrors: ErrorIF[] = [];
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((createdUser: firebase.auth.UserCredential) => {
          if (!createdUser.user) return false;
          dispatch(setMe(createdUser.user));
          dispatch(setLogin());
          history.push(ROUTES.home.pathname);
        })
        .catch((err) => {
          setError(newErrors.concat(err));
        });
    }
  };

  return !isLogin ? (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>{t('signin.title')}</Styled.Title>
        <Styled.Content>
          <Styled.Form>
            <Styled.StyleFieldInput
              type="email"
              name="email"
              label={''}
              value={values.email}
              placeholder={t('signin.form.email.placeholder')}
              errorMessage=""
              onChange={handleChange}
            />
            <Styled.StyleFieldInput
              type="password"
              name="password"
              label={''}
              value={values.password}
              placeholder={t('signin.form.password.placeholder')}
              errorMessage=""
              onChange={handleChange}
            />
            {errors.length > 0 && (
              <Styled.ErrorArea>
                {errors.map((error: ErrorIF, i: number) => (
                  <Styled.StyleErrorMessage key={i} errorMessage={error.message} />
                ))}
              </Styled.ErrorArea>
            )}
            <Styled.ButtonArea>
              <Styled.SubmitBtn
                theme="primary"
                type="submit"
                label={t('signin.form.buttons.submit')}
                onClick={handleSubmit}
              />
            </Styled.ButtonArea>
            <Styled.LinkArea>
              <Styled.StyleLink to={ROUTES.signup.pathname}>{t('signin.form.links.signup')}</Styled.StyleLink>
            </Styled.LinkArea>
          </Styled.Form>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  ) : (
    <Redirect to={ROUTES.home.pathname} />
  );
};

export default Signin;
