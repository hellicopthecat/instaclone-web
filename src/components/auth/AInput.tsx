import {Path, UseFormClearErrors, UseFormRegister} from "react-hook-form";
import styled from "styled-components";
import {IInputValues} from "../../types/type";

const AInputCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
`;

interface IAInput {
  inputId: Path<IInputValues>;
  inputType: string;
  inputText: string;
  labelText?: string;
  labelHidden?: boolean;
  register: UseFormRegister<IInputValues>;
  clearErrors?: UseFormClearErrors<IInputValues>;
}
const AInput: React.FC<IAInput> = ({
  inputId,
  inputType,
  inputText,
  labelText,
  labelHidden = true,
  register,
  clearErrors,
}) => {
  const userName = inputId === "userName";
  const userId = inputId === "userId";
  const userEmail = inputId === "email";
  const userPw = inputId === "password";

  return (
    <AInputCont>
      <label htmlFor={inputId} hidden={labelHidden}>
        {labelText ?? inputId}
      </label>
      <Input
        {...register(inputId, {
          required: userName
            ? "UserName is required"
            : userId
            ? "UserID is required"
            : userEmail
            ? "Email is required"
            : userPw
            ? "Password is required"
            : "",
          minLength: {
            value: 4,
            message: userId
              ? "userName should be longer than 5"
              : userPw
              ? "userPw should be longer than 5"
              : "",
          },
        })}
        id={inputId}
        type={inputType}
        placeholder={inputText}
        onChange={() => clearErrors?.(inputId)}
      />
    </AInputCont>
  );
};
export default AInput;
