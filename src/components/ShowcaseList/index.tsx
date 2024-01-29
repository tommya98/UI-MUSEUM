import Showcase from "../Showcase";
import * as S from "./styled";

interface IShowcaseListProps {
  childrens: React.ReactNode[];
}

const ShowcaseList = ({ childrens }: IShowcaseListProps) => {
  return (
    <S.Wrapper>
      {childrens.map((children, idx) => (
        <Showcase key={idx}>{children}</Showcase>
      ))}
    </S.Wrapper>
  );
};

export default ShowcaseList;
