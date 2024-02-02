import * as S from "./styled";

interface IThemeToggleProps {
  isDark: boolean;
  onClick: () => void;
}

const ThemeToggle = ({ isDark, onClick }: IThemeToggleProps) => {
  return (
    <S.ToggleButton onClick={onClick}>
      {isDark ? <S.Icon src="/moon.svg" /> : <S.Icon src="/sun.svg" />}
    </S.ToggleButton>
  );
};

export default ThemeToggle;
