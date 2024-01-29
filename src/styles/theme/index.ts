import "@emotion/react";
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
  SECONDARY: "#F2F2F2",
  ACCENT: "#30A6A6",
  COMPLEMENTARY: "#FFFAF0",
  TEXT: "#2B2B2B",
  GRAY: {
    LIGHT: "#F0F0F0",
    MEDIUM: "#BFBFBF",
    DARK: "#808080",
  },
};

export const DARK_THEME: Theme = {
  PRIMARY: "#336699",
  SECONDARY: "#2B2B2B",
  ACCENT: "#66CCCC",
  COMPLEMENTARY: "#33302E",
  TEXT: "#E6E6E6",
  GRAY: {
    LIGHT: "#505050",
    MEDIUM: "#404040",
    DARK: "#303030",
  },
};
