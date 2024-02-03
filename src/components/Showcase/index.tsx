import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styled";

import { openModal } from "../../stores/ModalStore";

interface IShowcaseProps {
  bgColor?: string;
  children?: ReactNode;
}

const Showcase = ({ bgColor, children }: IShowcaseProps) => {
  const dispatch = useDispatch();

  const handleClick = (component: ReactNode) => dispatch(openModal(component));

  return (
    <S.Wrapper bgColor={bgColor} onClick={() => handleClick(children)}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Showcase;
