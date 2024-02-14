import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./styled";

import ShowcaseList from "../ShowcaseList";
import componentsWithMetaData, { IComponentsMetaData } from "../../exhibits";
import selectExhibits from "../../utils/selectExhibits";
import { RootState } from "../../stores";

const Main = () => {
  const [exhibitLists, setExhibitLists] = useState<IComponentsMetaData[][]>([]);
  const windowSize = useSelector((state: RootState) => state.windowSize);

  useEffect(() => {
    const arrayNum = Math.max(Math.floor(windowSize.width / 400), 1);
    const itemNum = Math.floor(windowSize.height / 400) + 5;

    const selectedExhibits = selectExhibits(
      componentsWithMetaData,
      arrayNum,
      itemNum
    );
    setExhibitLists(selectedExhibits);
  }, [windowSize]);

  const exhibitContents = exhibitLists.map((componentsWithMetaData, i) => {
    const direction = i % 2 === 0 ? "up" : "down";
    return (
      <ShowcaseList
        key={`exhibit_${i}`}
        exhibits={componentsWithMetaData}
        direction={direction}
      />
    );
  });

  return <S.Wrapper>{exhibitContents}</S.Wrapper>;
};

export default Main;
