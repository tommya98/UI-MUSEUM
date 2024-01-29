import * as S from "./styled";

interface ThemeToggleProps {
  isDark: boolean;
  onClick: () => void;
}

const ThemeToggle = ({ isDark, onClick }: ThemeToggleProps) => {
  return (
    <S.ToggleButton onClick={onClick}>
      {isDark ? <S.Icon src="/moon.svg" /> : <S.Icon src="/sun.svg" />}
    </S.ToggleButton>
  );
};

export default ThemeToggle;
