import * as S from "./styled";

import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

interface IThemeToggleProps {
  isDark: boolean;
  onClick: () => void;
}

const ThemeToggle = ({ isDark, onClick }: IThemeToggleProps) => {
  return (
    <S.ToggleButton onClick={onClick}>
      {isDark ? <S.Icon src={moonIcon} /> : <S.Icon src={sunIcon} />}
    </S.ToggleButton>
  );
};

export default ThemeToggle;
