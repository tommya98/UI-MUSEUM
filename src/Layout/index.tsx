import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styled";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Modal from "../components/Modal";
import { resizeWindow } from "../stores/WindowSizeSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const handleResize = () => {
    const newSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    dispatch(resizeWindow(newSize));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
