import * as S from "./styled";
import Showcase from "../Showcase";
import MyComponent from "../MyComponent";

const Main = () => {
  return (
    <S.Wrapper>
      <Showcase>
        <MyComponent />
      </Showcase>
    </S.Wrapper>
  );
};

export default Main;
