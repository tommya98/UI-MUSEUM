import * as S from "./styled";
import { useDispatch } from "react-redux";
import { openModal } from "../../store";

interface IShowcaseProps {
  bgColor?: string;
  children?: React.ReactNode;
}

const Showcase = ({ bgColor, children }: IShowcaseProps) => {
  const dispatch = useDispatch();

  const handleClick = (modalId: number) => dispatch(openModal(modalId));

  return (
    <S.Wrapper bgColor={bgColor} onClick={() => handleClick(0)}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Showcase;
