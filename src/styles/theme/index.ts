import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    PRIMARY: string;
    SECONDARY: string;
    ACCENT: string;
    COMPLEMENTARY: string;
    TEXT: string;
    GRAY: {
      LIGHT: string;
      MEDIUM: string;
      DARK: string;
    };
  }
}

export const LIGHT_THEME: Theme = {
  PRIMARY: "#003366",
  SECONDARY: "#F7F8FA",
  ACCENT: "#30A6A6",
  COMPLEMENTARY: "#FFFAF0",
  TEXT: "#2B2B2B",
  GRAY: {
    LIGHT: "#EEEFF1",
    MEDIUM: "#C0C5C9",
    DARK: "#808388",
  },
};

export const DARK_THEME: Theme = {
  PRIMARY: "#336699",
  SECONDARY: "#2C2D2E",
  ACCENT: "#66CCCC",
  COMPLEMENTARY: "#33302E",
  TEXT: "#E6E6E6",
  GRAY: {
    LIGHT: "#3C3D40",
    MEDIUM: "#626368",
    DARK: "#b9bbc5",
  },
};
