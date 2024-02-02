import styled from "styled-components";

const ErrorMsgCont = styled.div`
  color: tomato;
`;

export const Title: React.FC<{title: string}> = ({title}) => {
  return <h2>{title}</h2>;
};

export const ErrorMessage: React.FC<{error: string}> = ({error}) => {
  return (
    <ErrorMsgCont>
      <p>{error}</p>
    </ErrorMsgCont>
  );
};
