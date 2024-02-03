import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState, closeModal } from "../../store";

const ModalCard = () => {
  const modalState = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();

  const component = modalState.component;
  if (!React.isValidElement(component)) return null;
  const { title, date, description, url } = component.props;

  const handleBtnClick = () => dispatch(closeModal());
  const handleGithubClick = () => window.open(url, "_blank");

  return (
    <S.Container>
      <S.CloseBtn onClick={handleBtnClick} />
      <S.Content>{component}</S.Content>
      <S.Detail>
        <S.Title>{title}</S.Title>
        <S.Github src="/github-mark.svg" onClick={handleGithubClick} />
        <S.Date>{date}</S.Date>
        <S.Description>{description}</S.Description>
      </S.Detail>
    </S.Container>
  );
};

export default ModalCard;
