import * as S from "./Input.Styles";

const Input = ({ type, placeholder }) => {
  let inputType;
  switch (type) {
    case 'text':
      inputType = "text";
      break;
    case 'pss':
      inputType = "passoword";
      break;

    default:
      inputType = "pss";
      break;
  }
  return <S.Input type={type} placeholder={placeholder} />;
};

export default Input;
