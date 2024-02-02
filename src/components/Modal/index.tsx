import * as S from "./styled";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeModal } from "../../store";

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
        <S.Container>Modal</S.Container>
      </S.Background>
    )
  );
};

export default Modal;
