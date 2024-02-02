import styled from "styled-components";

export const SeperatorCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
  div {
    width: 100%;
    border: 1px solid rgb(215, 215, 215);
  }
  span {
    padding: 0 10px;
  }
`;
const Seperator = () => {
  return (
    <SeperatorCont>
      <div></div>
      <span>or</span>
      <div></div>
    </SeperatorCont>
  );
};
export default Seperator;
