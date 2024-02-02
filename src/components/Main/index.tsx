import * as S from "./styled";

import ShowcaseList from "../ShowcaseList";
import exhibits from "../../exhibits";

const Main = () => {
  return (
    <S.Wrapper>
      <ShowcaseList childrens={exhibits} direction="up" />
      <ShowcaseList childrens={exhibits} direction="down" />
      <ShowcaseList childrens={exhibits} direction="up" />
    </S.Wrapper>
  );
};

export default Main;
