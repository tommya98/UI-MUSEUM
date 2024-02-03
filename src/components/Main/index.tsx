import * as S from "./styled";

import ShowcaseList from "../ShowcaseList";
import exhibits from "../../exhibits";
import selectExhibits from "../../utils/selectExhibits";

const ARRAY_NUM = 3;
const ITEM_NUM = 5;

const Main = () => {
  const selectedExhibits = selectExhibits(exhibits, ARRAY_NUM, ITEM_NUM);

  return (
    <S.Wrapper>
      {selectedExhibits.map((exhibits, i) => {
        const direction = i % 2 === 0 ? "up" : "down";
        return (
          <ShowcaseList
            key={`exhibit_${i}`}
            childrens={exhibits}
            direction={direction}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default Main;
