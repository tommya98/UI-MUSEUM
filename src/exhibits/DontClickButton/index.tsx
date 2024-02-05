import { useState } from "react";
import * as S from "./styled";

const DontClickButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <S.Button onClick={handleClick} isLoading={isLoading}>
      {isLoading ? <S.Loader /> : <S.Text>Don't Click Me!</S.Text>}
    </S.Button>
  );
};

export default DontClickButton;
