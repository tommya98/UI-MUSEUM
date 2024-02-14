import DontClickButton from "./DontClickButton";
import MyComponent from "./MyComponent";

export type TComponentName =
  | "DontClickButton"
  | "MyComponent1"
  | "MyComponent2"
  | "MyComponent3"
  | "MyComponent4";

export interface IComponentsMetaData {
  componentName: TComponentName;
  props?: Record<string, any>;
  metaData: {
    title: string;
    description: string;
    date: string;
    url: string;
  };
}

export const componentMapper = {
  DontClickButton,
  MyComponent1: MyComponent,
  MyComponent2: MyComponent,
  MyComponent3: MyComponent,
  MyComponent4: MyComponent,
};

const componentsWithMetaData: IComponentsMetaData[] = [
  {
    componentName: "DontClickButton",
    props: {},
    metaData: {
      title: "누르면 안 되는 버튼",
      description: "누르면 안되지만 혹시라도 누르면 깜빡이는 버튼입니다.",
      date: "2024-02-05",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/DontClickButton",
    },
  },
  ...["red", "blue", "grey", "orange"].map((color, index) => ({
    componentName: `MyComponent${index + 1}` as TComponentName,
    props: { bg: color },
    metaData: {
      title: `기본 ${color} 버튼`,
      description: `테스트용 기본 ${color} 버튼입니다.`,
      date: "2024-02-02",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/MyComponent",
    },
  })),
];

export default componentsWithMetaData;
