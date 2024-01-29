import * as S from "./styled";
import ShowcaseList from "../ShowcaseList";
import MyComponent from "../MyComponent";

const Main = () => {
  const childrens = [
    <MyComponent />,
    <MyComponent />,
    <MyComponent />,
  ] as React.ReactNode[];

  return (
    <S.Wrapper>
      <ShowcaseList childrens={childrens} />
      <ShowcaseList childrens={childrens} />
      <ShowcaseList childrens={childrens} />
    </S.Wrapper>
  );
};

export default Main;
