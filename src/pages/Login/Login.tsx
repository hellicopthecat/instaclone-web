import {
  LoginFormCont,
  LoginFormImg,
  SignUpCont,
  SocialLoginCont,
} from "./Login.style";
import AuthLayer from "../../components/auth/AuthLayer";
import AInput from "../../components/auth/AInput";
import Seperator from "../../components/auth/Seperator";
import AButton from "../../components/auth/AButton";
import BottomText from "../../components/auth/BottomText";
import {routerName} from "../../shared";
import {ErrorMessage, Title} from "../../components/shared";
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";
import {IInputValues} from "../../types/type";
import PageTitle from "../../components/PageTitle";
import {FetchResult, gql, useMutation} from "@apollo/client";
import {LoginResult, Mutation} from "../../gql/graphql";
import {logInUser} from "../../apollo";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      ok
      error
    }
  }
`;
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors, isValid},
    setError,
    clearErrors,
  } = useForm<IInputValues>();
  const onCompleted = (data: Mutation) => {
    const {
      login: {ok, error, token},
    } = data;
    if (!ok) {
      setError("result", {message: error + ""});
    }
    if (token) {
      logInUser(token);
    }
  };
  const [login, {loading}] = useMutation(LOGIN_MUTATION, {onCompleted});
  const handleLogin: SubmitHandler<IInputValues> = async (event) => {
    if (loading) {
      return;
    }
    const {userId, password} = getValues();
    const data: FetchResult<{login: LoginResult}> = await login({
      variables: {userName: userId, password},
    });
    if (!data.data?.login.ok) {
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      navigate(routerName.home, {replace: true});
    });
  }, []);
  return (
    <>
      <PageTitle title="로그인" />
      <AuthLayer
        children={
          <LoginFormCont>
            <div>
              <Title title="SNS LOG IN" />
              <div>{location.state?.message}</div>
            </div>
            <LoginFormImg>
              <div>PIC</div>
            </LoginFormImg>
            <Form onSubmit={handleSubmit(handleLogin)}>
              <legend hidden>로그인</legend>
              <AInput
                register={register}
                inputId="userId"
                inputType="text"
                inputText="ID"
                clearErrors={clearErrors}
              />
              {errors.userId?.message === undefined ? null : (
                <ErrorMessage error={errors.userId?.message + ""} />
              )}
              <AInput
                register={register}
                inputId="password"
                inputType="text"
                inputText="Password"
                clearErrors={clearErrors}
              />
              {errors.password?.message === undefined ? null : (
                <ErrorMessage error={errors.password?.message + ""} />
              )}
              <AButton btnType="submit" btnTxt="Log In" />
              {errors.result?.message === undefined ? null : (
                <ErrorMessage error={errors.result?.message + ""} />
              )}
            </Form>
            <Seperator />
            <SocialLoginCont>
              <BottomText
                linkUrl="www.google.com"
                linkDesc="Login With Google"
              />
            </SocialLoginCont>
            <SignUpCont>
              <BottomText
                para="Don't Have an Account?"
                linkUrl={routerName.join}
                linkDesc="Sing Up?"
              />
            </SignUpCont>
          </LoginFormCont>
        }
      />
    </>
  );
};

export default Login;
