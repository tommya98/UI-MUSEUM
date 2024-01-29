import { Global, Theme, css } from "@emotion/react";

const style = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    background-color: ${theme.SECONDARY};
  }
`;

const GlobalStyles = () => <Global styles={style} />;

export default GlobalStyles;
