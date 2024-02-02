import * as S from "./styled";

export interface IMyComponentProps {
  bg?: string;
}

const MyComponent = ({ bg }: IMyComponentProps) => {
  return <S.Button bg={bg}>MyButton</S.Button>;
};

export default MyComponent;
