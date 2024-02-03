import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState, closeModal } from "../../store";
import ModalCard from "../ModalCard";

export type TModalStatus = "OPENED" | "OPENING" | "CLOSING" | "CLOSED";

const OPENED = "OPENED";
const OPENING = "OPENING";
const CLOSING = "CLOSING";
const CLOSED = "CLOSED";
const ANIMATION_DURATION = 500;

const Modal = () => {
  const modalState = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<number | null>(null);
  const [modalStatus, setModalStatus] = useState<TModalStatus>(CLOSED);

  const handleClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    dispatch(closeModal());
  };

  const handleStateTransition = (
    newStatus: TModalStatus,
    nextStatus: TModalStatus
  ) => {
    setModalStatus(newStatus);
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(
      () => setModalStatus(nextStatus),
      ANIMATION_DURATION
    );
  };

  useEffect(() => {
    if (modalState.isOpen) handleStateTransition(OPENING, OPENED);
    else handleStateTransition(CLOSING, CLOSED);

    const backgroundContent = backgroundRef.current;
    if (!backgroundContent) return;
    backgroundContent.addEventListener("click", handleClick);

    return () => backgroundContent.removeEventListener("click", handleClick);
  }, [modalState.isOpen]);

  return (
    <S.Background ref={backgroundRef} modalStatus={modalStatus}>
      <S.Container modalStatus={modalStatus}>
        <ModalCard />
      </S.Container>
    </S.Background>
  );
};

export default Modal;
