import React from 'react';
import { useTranslation } from 'react-i18next';
import firebase from 'firebaseConfig';
import { useDispatch } from 'react-redux';
import { setLogin } from 'module/login/action';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { Styled } from 'sc/pages/Signup';

interface ValuesIF {
  [key: string]: string;
}

interface ErrorIF {
  message: string;
}

const initialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();

  const [values, setValues] = React.useState<ValuesIF>(initialValues);
  const [errors, setError] = React.useState<ErrorIF[]>([]);

  const isFormValid = () => {
    console.log(errors);
    const newErrors: ErrorIF[] = [];
    let error;

    if (isFormEmpty(values)) {
      error = { message: 'Fill in all fields' };
      setError(newErrors.concat(error));
      return false;
    } else if (!isPasswordValid(values.password, values.passwordConfirmation)) {
      error = { message: 'Password is invalid' };
      setError(newErrors.concat(error));
      return false;
    } else {
      return true;
    }
  };

  const isFormEmpty = (values: ValuesIF) => {
    return (
      !values.username.length || !values.email.length || !values.password.length || !values.passwordConfirmation.length
    );
  };

  const isPasswordValid = (password: string, passwordConfirmation: string) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
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
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((createdUser: firebase.auth.UserCredential) => {
          if (!createdUser.user) return false;
          console.log(createdUser);
          createdUser.user
            .updateProfile({
              displayName: values.username,
            })
            .then(() => {
              console.log('success');
              dispatch(setLogin());
              history.push(ROUTES.home.pathname);
            })
            .catch((err) => {
              setError(newErrors.concat(err));
            });
        })
        .catch((err) => {
          console.error(err);
          setError(newErrors.concat(err));
        });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>{t('signup.title')}</Styled.Title>
        <Styled.Content>
          <Styled.Form>
            <Styled.StyleFieldInput
              type="text"
              name="username"
              label={''}
              value={values.username}
              placeholder={t('signup.form.username.placeholder')}
              errorMessage=""
              onChange={handleChange}
            />
            <Styled.StyleFieldInput
              type="email"
              name="email"
              label={''}
              value={values.email}
              placeholder={t('signup.form.email.placeholder')}
              errorMessage=""
              onChange={handleChange}
            />
            <Styled.StyleFieldInput
              type="password"
              name="password"
              label={''}
              value={values.password}
              placeholder={t('signup.form.password.placeholder')}
              errorMessage=""
              onChange={handleChange}
            />
            <Styled.StyleFieldInput
              type="password"
              name="passwordConfirmation"
              label={''}
              value={values.passwordConfirmation}
              placeholder={t('signup.form.passwordConfirmation.placeholder')}
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
                label={t('signup.form.buttons.submit')}
                onClick={handleSubmit}
              />
            </Styled.ButtonArea>
            <Styled.LinkArea>
              <Styled.StyleLink to={ROUTES.signin.pathname}>{t('signup.form.links.signin')}</Styled.StyleLink>
            </Styled.LinkArea>
          </Styled.Form>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Signup;
