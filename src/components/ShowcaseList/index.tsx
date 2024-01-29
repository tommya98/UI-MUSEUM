import { useEffect, useRef, useState } from "react";
import Showcase from "../Showcase";
import * as S from "./styled";
import addChildEventListener from "../../utils/addChildEventListener";

interface IShowcaseListProps {
  childrens: React.ReactNode[];
  direction: "up" | "down";
}

const ShowcaseList = ({ childrens, direction }: IShowcaseListProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
    console.log("enter");
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
    console.log("leave");
  };

  const { addChildEvents, removeChildEvents } = addChildEventListener([
    { eventType: "mouseenter", handler: handleMouseEnter },
    { eventType: "mouseleave", handler: handleMouseLeave },
  ]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const elements = Array.from(wrapper.children) as HTMLElement[];

    addChildEvents(elements);

    return () => {
      removeChildEvents(elements);
    };
  }, [isPaused]);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Original isPaused={isPaused}>
        {childrens.map((children, idx) => (
          <Showcase key={idx}>{children}</Showcase>
        ))}
      </S.Original>
      <S.Copy isPaused={isPaused}>
        {childrens.map((children, idx) => (
          <Showcase key={idx}>{children}</Showcase>
        ))}
      </S.Copy>
    </S.Wrapper>
  );
};

export default ShowcaseList;
