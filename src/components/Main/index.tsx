import * as S from "./styled";
import ShowcaseList from "../ShowcaseList";
import MyComponent from "../MyComponent";

const Main = () => {
  const childrens = [
    <MyComponent />,
    <MyComponent />,
    <MyComponent />,
    <MyComponent />,
    <MyComponent />,
  ] as React.ReactNode[];

  return (
    <S.Wrapper>
      <ShowcaseList childrens={childrens} direction="up" />
      <ShowcaseList childrens={childrens} direction="down" />
      <ShowcaseList childrens={childrens} direction="up" />
    </S.Wrapper>
  );
};

export default Main;
