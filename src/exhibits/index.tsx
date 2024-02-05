import React, { ReactNode } from "react";

import MyComponent from "./MyComponent";
import DontClickButton from "./DontClickButton";

interface IComponentsWithMetaData {
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  metaData: {
    title: string;
    description: string;
    date: string;
    url: string;
  };
}

const exhibits: ReactNode[] = [];

const componentsWithMetaData: IComponentsWithMetaData[] = [
  {
    component: MyComponent,
    props: {
      bg: "red",
    },
    metaData: {
      title: "기본 빨강 버튼",
      description: "테스트용 기본 빨강 버튼입니다.",
      date: "2024-02-02",
      url: "https://github.com/tommya98",
    },
  },
  {
    component: MyComponent,
    props: {
      bg: "blue",
    },
    metaData: {
      title: "기본 파랑 버튼",
      description: "테스트용 기본 파랑 버튼입니다.",
      date: "2024-02-02",
      url: "https://github.com/tommya98",
    },
  },
  {
    component: MyComponent,
    props: {
      bg: "green",
    },
    metaData: {
      title: "기본 초록 버튼",
      description: "테스트용 기본 초록 버튼입니다.",
      date: "2024-02-02",
      url: "https://github.com/tommya98",
    },
  },
  {
    component: MyComponent,
    props: {
      bg: "orange",
    },
    metaData: {
      title: "기본 주황 버튼",
      description: "테스트용 기본 주황 버튼입니다.",
      date: "2024-02-02",
      url: "https://github.com/tommya98",
    },
  },
  {
    component: DontClickButton,
    props: {},
    metaData: {
      title: "누르면 안 되는 버튼",
      description: "누르면 안되지만 혹시라도 누르면 깜빡이는 버튼입니다.",
      date: "2024-02-05",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/DontClickButton",
    },
  },
];

componentsWithMetaData.forEach(({ component, props, metaData }) => {
  exhibits.push(React.createElement(component, { ...props, ...metaData }));
});

export default exhibits;
