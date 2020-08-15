import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {
  Button,
  CheckBox,
  Input,
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  Text,
} from '@ui-kitten/components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';

import {
  PersonLineIcon,
  EmailLineIcon,
  CaptionIcon,
} from '../../../components/icons.component';
import {KeyboardAvoidingView} from '../../../components/kb-avoiding-view.component';
import {RouterConstants} from '../../../constants/router.constants';
import TMStatusBar from '../../../components/status-bar.component';
import ScreenLoader from '../../../components/screen-loader.component';
import {signupUser} from '../../../store/actions/authActions';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Full is required'),
  userName: Yup.string().max(15, 'Too long!').required(),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is Required'),
  isAccepetedTerms: Yup.boolean().equals([true]),
});

const Signup = ({navigation, signupUserData}): React.ReactElement => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignInButtonPress = (): void => {
    navigation?.navigate(RouterConstants.Signin);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={!secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const fields = [
    {
      fieldName: 'fullName',
      placeholder: 'Full name',
      captionIcon: CaptionIcon,
      autoCompleteType: 'name',
      autoCapitalize: 'words',
      accessoryRight: PersonLineIcon,
    },
    {
      fieldName: 'userName',
      placeholder: 'Nick name',
      captionIcon: CaptionIcon,
      autoCompleteType: 'name',
      autoCapitalize: 'words',
      accessoryRight: PersonLineIcon,
    },
    {
      fieldName: 'email',
      placeholder: 'Email',
      captionIcon: CaptionIcon,
      autoCompleteType: 'email',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      accessoryRight: EmailLineIcon,
    },
    {
      fieldName: 'password',
      placeholder: 'Password',
      autoCapitalize: 'none',
      captionIcon: CaptionIcon,
      autoCompleteType: 'password',
      secureTextEntry: secureTextEntry,
      accessoryRight: renderIcon,
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      {isLoading ? <ScreenLoader loading={isLoading} /> : null}
      <View style={styles.headerContainer}>
        <Text>Welcome to ADMK Party, Sign up here</Text>
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          fullName: '',
          userName: '',
          isAccepetedTerms: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, actions) => {
          setIsLoading(true);
          console.log(values);
          signupUserData(values);
          setIsLoading(false);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          setFieldValue,
        }: any) => (
          <>
            <Layout style={styles.formContainer} level="1">
              {fields.map((field, index) => (
                <Input
                  key={field.fieldName}
                  autoCapitalize={field.autoCapitalize as any}
                  placeholder={field.placeholder}
                  accessoryRight={field.accessoryRight}
                  value={values[field.fieldName]}
                  onChangeText={handleChange(field.fieldName)}
                  onBlur={handleBlur(field.fieldName)}
                  autoCompleteType={field.autoCompleteType as any}
                  style={index === fields.length ? null : styles.input}
                  captionIcon={
                    errors[field.fieldName] ? field.captionIcon : undefined
                  }
                  status={errors[field.fieldName] ? 'danger' : ''}
                  caption={errors[field.fieldName]}
                  secureTextEntry={
                    field.fieldName === 'password' ? secureTextEntry : false
                  }
                />
              ))}

              <CheckBox
                style={styles.termsCheckBox}
                status="danger"
                checked={values.isAccepetedTerms}
                onChange={(checked: boolean) =>
                  setFieldValue('isAccepetedTerms', checked)
                }>
                {() => (
                  <Text status="danger" style={styles.agreement}>
                    I read and agree to Terms &#38; Conditions
                  </Text>
                )}
              </CheckBox>
            </Layout>
            <Button
              style={styles.signUpButton}
              size="giant"
              onPress={handleSubmit}>
              Sign up
            </Button>
          </>
        )}
      </Formik>
      <Button
        style={styles.signInButton}
        appearance="ghost"
        status="basic"
        onPress={onSignInButtonPress}>
        Already have an account? Sign In
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },

  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  input: {
    marginBottom: 16,
  },

  termsCheckBox: {
    marginTop: 15,
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  googleBtn: {
    marginRight: 30,
  },
  agreement: {
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

const mapDispatchToProps = {
  signupUserData: signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
