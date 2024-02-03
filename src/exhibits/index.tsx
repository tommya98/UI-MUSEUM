import React, { ReactNode } from "react";

import MyComponent from "./MyComponent";

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
    component: MyComponent,
    props: {
      bg: "purple",
    },
    metaData: {
      title: "기본 보라 버튼",
      description: "테스트용 기본 보라 버튼입니다.",
      date: "2024-02-02",
      url: "https://github.com/tommya98",
    },
  },
];

componentsWithMetaData.forEach(({ component, props, metaData }) => {
  exhibits.push(React.createElement(component, { ...props, ...metaData }));
});

export default exhibits;
