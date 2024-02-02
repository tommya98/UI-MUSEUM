import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState, closeModal } from "../../store";
import ModalCard from "../ModalCard";

const Modal = () => {
  const modalState = useSelector((state: RootState) => state.modals);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    dispatch(closeModal());
  };

  useEffect(() => {
    const backgroundContent = backgroundRef.current;
    if (!backgroundContent) return;
    backgroundContent.addEventListener("click", handleClick);

    return () => backgroundContent.removeEventListener("click", handleClick);
  }, [modalState.isOpen]);

  return (
    modalState.isOpen && (
      <S.Background ref={backgroundRef}>
        <S.Container>
          <ModalCard />
        </S.Container>
      </S.Background>
    )
  );
};

export default Modal;
