import * as S from "./styled";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Modal from "../components/Modal";

const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <Main />
      <Modal />
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
