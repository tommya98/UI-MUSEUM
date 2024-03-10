import DontClickButton from "./DontClickButton";
import LikeButton from "./LikeButton";
import MyComponent from "./MyComponent";
import LeapLoading from "./LeapLoading";
import AtomOrbit from "./AtomOrbit";
import NotificationIcon from "./NotificationIcon";

export type TComponentName =
  | "DontClickButton"
  | "LikeButton"
  | "LeapLoading"
  | "AtomOrbit"
  | "NotificationIcon"
  | "MyComponent1"
  | "MyComponent2";

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
  LikeButton,
  LeapLoading,
  AtomOrbit,
  NotificationIcon,
  MyComponent1: MyComponent,
  MyComponent2: MyComponent,
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
  {
    componentName: "LikeButton",
    props: {},
    metaData: {
      title: "좋아요 버튼",
      description: "좋아요를 누르면 튀어오르는 버튼입니다.",
      date: "2024-02-14",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/LikeButton",
    },
  },
  {
    componentName: "LeapLoading",
    props: {},
    metaData: {
      title: "무한 로딩 UI",
      description: "앞으로 가지 못하고 계속 돌아오는 무한 로딩 UI입니다.",
      date: "2024-02-28",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/LeapLoading",
    },
  },
  {
    componentName: "AtomOrbit",
    props: {},
    metaData: {
      title: "원자 궤도 모형",
      description: "보어의 원자 궤도 모형에서 아이디어를 얻은 컴포넌트입니다.",
      date: "2024-02-28",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/AtomOrbit",
    },
  },
  {
    componentName: "NotificationIcon",
    props: {},
    metaData: {
      title: "종모양 알림 아이콘",
      description:
        "새로운 알림이 있다면 신호를 주는 알림 아이콘입니다. 빨간 알림 아이콘에 마우스를 가져다 대면 알림 개수를 확인할 수 있습니다.",
      date: "2024-03-10",
      url: "https://github.com/tommya98/UI-MUSEUM/tree/main/src/exhibits/NotificationIcon",
    },
  },
  ...["red"].map((color, index) => ({
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
