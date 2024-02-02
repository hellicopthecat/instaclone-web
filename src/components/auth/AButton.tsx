import styled from "styled-components";

const Btn = styled.button`
  padding: 10px 0;
  background-color: ${(props) =>
    props.type === "submit" ? "skyblue" : "lightgray"};
`;
interface IButton {
  btnType: "submit" | "button";
  btnTxt: string;
}
const AButton: React.FC<IButton> = ({btnType, btnTxt}) => {
  return <Btn type={btnType}>{btnTxt}</Btn>;
};
export default AButton;
