import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as S from "./styled";

import Showcase from "../Showcase";
import childEventLister from "../../utils/childEventListener";
import { IComponentsMetaData } from "../../exhibits";

export type TDirection = "up" | "down";

interface IShowcaseListProps {
  exhibits: IComponentsMetaData[];
  direction: TDirection;
}

const ShowcaseList = ({ exhibits, direction }: IShowcaseListProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const { addChildEvents, removeChildEvents } = childEventLister([
    { eventType: "mouseenter", handler: handleMouseEnter },
    { eventType: "mouseleave", handler: handleMouseLeave },
  ]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    setContentHeight(content.clientHeight);
    setWrapperHeight(wrapper.clientHeight);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const elements = Array.from(wrapper.children) as HTMLElement[];
    addChildEvents(elements);

    return () => removeChildEvents(elements);
  }, []);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Original
        isPaused={isPaused}
        direction={direction}
        ref={contentRef}
        contentHeight={contentHeight}
        wrapperHeight={wrapperHeight}
      >
        {exhibits.map((exhibit, idx) => (
          <Showcase key={`marquee-item ${idx * 2}`} exhibit={exhibit} />
        ))}
      </S.Original>
      <S.Copy
        isPaused={isPaused}
        direction={direction}
        contentHeight={contentHeight}
        wrapperHeight={wrapperHeight}
      >
        {exhibits.map((exhibit, idx) => (
          <Showcase key={`marquee-item ${idx * 2 + 1}`} exhibit={exhibit} />
        ))}
      </S.Copy>
    </S.Wrapper>
  );
};

export default ShowcaseList;
