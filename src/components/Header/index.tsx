import * as S from "./styled";

const Header = () => {
  const onClick = () => {
    window.location.href = "/";
  };

  return (
    <S.Wrapper>
      <S.Header>
        <a onClick={onClick}>UI MUSEUM</a>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
