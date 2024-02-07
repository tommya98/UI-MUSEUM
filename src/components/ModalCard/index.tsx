import { useState, isValidElement, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState } from "../../stores";
import { closeModal } from "../../stores/ModalStateSlice";
import githubIcon from "../../assets/github-mark.svg";
import InputRange from "../InputRange";

const ModalCard = () => {
  const { isOpen, component } = useSelector(
    (state: RootState) => state.modalState
  );
  const dispatch = useDispatch();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) setScale(1);
  }, [isOpen]);

  if (!isValidElement(component)) return null;
  const { title, date, description, url } = component.props;

  const handleBtnClick = () => dispatch(closeModal());
  const handleGithubClick = () => window.open(url, "_blank");
  const hnadleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setScale(Number(e.target.value));

  return (
    <S.Container>
      <S.CloseBtn onClick={handleBtnClick} />
      <S.Content>
        <S.Github src={githubIcon} onClick={handleGithubClick} />
        <S.Component scale={scale}>{component}</S.Component>
        <S.ScaleBtns>
          <InputRange
            value={scale}
            min={0.5}
            max={5}
            step={0.1}
            onChange={hnadleInputChange}
          />
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
