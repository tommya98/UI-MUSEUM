import * as S from "./styled";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store";

interface ModalCardProps {
  children: React.ReactNode;
}

const ModalCard = ({ children }: ModalCardProps) => {
  const dispatch = useDispatch();

  const handleBtnClick = () => dispatch(closeModal());

  return (
    <S.Container>
      <S.CloseBtn onClick={handleBtnClick} />
      <S.Content>{children}</S.Content>
      <S.Detail>
        <S.Title>컴포넌트 이름</S.Title>
        <S.Date>2024.02.02</S.Date>
        <S.Description>컴포넌트에 대한 설명</S.Description>
      </S.Detail>
    </S.Container>
  );
};

export default ModalCard;
