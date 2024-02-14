import { useState } from "react";
import * as S from "./styled";

const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked((prev) => !prev);

  return (
    <S.Button isClicked={isClicked} onClick={handleClick}>
      <svg viewBox="-1 -1 34 32">
        <path
          d="M23.6,0C20.9,0,18.4,1.6,17,4.1C15.6,1.6,13.1,0,10.4,0C4.6,0,0,4.6,0,10.4c0,8.1,12.9,15.2,16,18.5
    c3.1-3.3,16-10.4,16-18.5C32,4.6,27.4,0,23.6,0z"
          fill={isClicked ? "red" : "none"}
          stroke="red"
          strokeWidth="1"
        />
      </svg>
    </S.Button>
  );
};

export default LikeButton;
