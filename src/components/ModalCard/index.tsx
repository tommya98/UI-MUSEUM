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
        <S.Title>title</S.Title>
        <S.Date>date</S.Date>
        <S.Description>description</S.Description>
      </S.Detail>
    </S.Container>
  );
};

export default ModalCard;
