import * as S from "./styled";

const Footer = () => {
  return (
    <S.Wrapper>
      <p>&copy; Powered by SeokHun</p>
      <p>
        <a href="https://seokhun.dev">Blog</a> |{" "}
        <a href="https://github.com/tommya98">GitHub</a>
      </p>
    </S.Wrapper>
  );
};

export default Footer;
