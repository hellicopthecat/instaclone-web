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

const FatTxt = styled.span`
  font-weight: 800;
  margin-right: 10px;
`;
export const FatText: React.FC<{txt: string}> = ({txt}) => {
  return <FatTxt>{txt}</FatTxt>;
};
