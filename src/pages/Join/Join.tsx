import {SubmitHandler, useForm} from "react-hook-form";
import AButton from "../../components/auth/AButton";
import AInput from "../../components/auth/AInput";
import AuthLayer from "../../components/auth/AuthLayer";
import BottomText from "../../components/auth/BottomText";
import {Title} from "../../components/shared";
import {routerName} from "../../shared";
import {GotoLogin, JoinFormCont, JoinWrapper, SubTitle} from "./Join.style";
import {IInputValues} from "../../types/type";
import {Form} from "../../styles/styles";
import PageTitle from "../../components/PageTitle";

const Join = () => {
  const {register, handleSubmit} = useForm<IInputValues>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<IInputValues> = (event) => {};
  return (
    <>
      <PageTitle title="회원가입" />
      <AuthLayer
        children={
          <JoinWrapper>
            <JoinFormCont>
              <Title title="SNS JOIN" />
              <SubTitle>
                회원가입을 하여 당신의 친구들의 사진과 영상을 시청하세요!
              </SubTitle>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <legend hidden>회원가입</legend>
                <AInput
                  register={register}
                  inputId="userId"
                  inputText="ID"
                  inputType="text"
                />
                <AInput
                  register={register}
                  inputId="userName"
                  inputText="이름"
                  inputType="text"
                />
                <AInput
                  register={register}
                  inputId="email"
                  inputText="E-Mail"
                  inputType="text"
                />
                <AInput
                  register={register}
                  inputId="password"
                  inputText="Password"
                  inputType="text"
                />
                <AInput
                  register={register}
                  inputId="checkPass"
                  inputText="Password 확인"
                  inputType="text"
                />
                <AButton btnType="submit" btnTxt="회원가입" />
              </Form>
            </JoinFormCont>
            <GotoLogin>
              <BottomText
                para="회원가입이 되어있습니까?"
                linkUrl={routerName.home}
                linkDesc="로그인하기"
              />
            </GotoLogin>
          </JoinWrapper>
        }
      />
    </>
  );
};
export default Join;
