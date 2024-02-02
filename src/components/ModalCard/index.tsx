import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState, closeModal } from "../../store";
import React from "react";

const ModalCard = () => {
  const modalState = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();

  const handleBtnClick = () => dispatch(closeModal());
  const component = modalState.component;

  if (!React.isValidElement(component)) return null;

  const { title, date, description } = component.props;

  return (
    <S.Container>
      <S.CloseBtn onClick={handleBtnClick} />
      <S.Content>{component}</S.Content>
      <S.Detail>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.Description>{description}</S.Description>
      </S.Detail>
    </S.Container>
  );
};

export default ModalCard;
