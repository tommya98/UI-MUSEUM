import { ReactNode } from "react";
import * as S from "./styled";

import ShowcaseList from "../ShowcaseList";
import MyComponent from "../../artworks/MyComponent";

const Main = () => {
  const childrens = [
    <MyComponent bg="red" />,
    <MyComponent bg="green" />,
    <MyComponent bg="black" />,
    <MyComponent bg="blue" />,
    <MyComponent bg="purple" />,
  ] as ReactNode[];

  return (
    <S.Wrapper>
      <ShowcaseList childrens={childrens} direction="up" />
      <ShowcaseList childrens={childrens} direction="down" />
      <ShowcaseList childrens={childrens} direction="up" />
    </S.Wrapper>
  );
};

export default Main;
