import * as S from "./styled";

const Header = () => {
  const handleClick = () => (window.location.href = "/");

  return (
    <S.Wrapper>
      <S.Header>
        <a onClick={handleClick}>UI MUSEUM</a>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
