import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./styled";

import ShowcaseList from "../ShowcaseList";
import exhibits from "../../exhibits";
import selectExhibits from "../../utils/selectExhibits";
import { RootState } from "../../stores";

const Main = () => {
  const [exhibitLists, setExhibitLists] = useState<ReactNode[][]>([]);
  const windowSize = useSelector(
    (state: RootState) => state.windowSize.windowSize
  );

  useEffect(() => {
    const arrayNum = Math.max(Math.floor(windowSize.width / 400), 1);
    const itemNum = Math.floor(windowSize.height / 400) + 5;

    const selectedExhibits = selectExhibits(exhibits, arrayNum, itemNum);
    setExhibitLists(selectedExhibits);
  }, [windowSize]);

  return (
    <S.Wrapper>
      {exhibitLists.map((exhibits, i) => {
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
