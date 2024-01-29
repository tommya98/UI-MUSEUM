import * as S from "./styled";

interface IShowcaseProps {
  bgColor?: string;
  children?: React.ReactNode;
}

const Showcase = ({ bgColor, children }: IShowcaseProps) => {
  return (
    <S.Wrapper bgColor={bgColor}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Showcase;
