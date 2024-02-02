import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

import { RootState, closeModal } from "../../store";

const ModalCard = () => {
  const modalState = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();

  const handleBtnClick = () => dispatch(closeModal());

  return (
    <S.Container>
      <S.CloseBtn onClick={handleBtnClick} />
      <S.Content>{modalState.component}</S.Content>
      <S.Detail>
        <S.Title>컴포넌트 이름</S.Title>
        <S.Date>2024.02.02</S.Date>
        <S.Description>컴포넌트에 대한 설명</S.Description>
      </S.Detail>
    </S.Container>
  );
};

export default ModalCard;
