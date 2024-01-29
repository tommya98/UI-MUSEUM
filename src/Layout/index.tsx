import * as S from "./styled";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <Main />
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
