import { useState, isValidElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState, closeModal } from "../../stores/ModalStore";
import githubIcon from "../../assets/github-mark.svg";
import plusIcon from "../../assets/plus.svg";
import minusIcon from "../../assets/minus.svg";

const ModalCard = () => {
  const modalState = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();
  const [scale, setScale] = useState(1);

  const component = modalState.component;
  if (!isValidElement(component)) return null;
  const { title, date, description, url } = component.props;

  const handleBtnClick = () => dispatch(closeModal());
  const handleGithubClick = () => window.open(url, "_blank");
  const handleScaleUp = () => setScale(scale * 1.1);
  const handleScaleDown = () => setScale(scale / 1.1);

  return (
    <S.Container>
      <S.CloseBtn onClick={handleBtnClick} />
      <S.Content>
        <S.Github src={githubIcon} onClick={handleGithubClick} />
        <S.Component scale={scale}>{component}</S.Component>
        <S.ScaleBtns>
          <S.Scale>{scale.toFixed(2)}</S.Scale>
          <S.BtnIcon src={plusIcon} onClick={handleScaleUp} />
          <S.BtnIcon src={minusIcon} onClick={handleScaleDown} />
        </S.ScaleBtns>
      </S.Content>
      <S.Detail>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.Description>{description}</S.Description>
      </S.Detail>
    </S.Container>
  );
};

export default ModalCard;
