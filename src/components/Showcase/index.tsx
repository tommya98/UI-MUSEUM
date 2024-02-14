import { useDispatch } from "react-redux";
import * as S from "./styled";

import { openModal } from "../../stores/ModalStateSlice";
import {
  IComponentsMetaData,
  TComponentName,
  componentMapper,
} from "../../exhibits";

interface IShowcaseProps {
  bgColor?: string;
  exhibit: IComponentsMetaData;
}

const Showcase = ({ bgColor, exhibit }: IShowcaseProps) => {
  const dispatch = useDispatch();
  const ComponentToRender = componentMapper[exhibit.componentName];

  const handleClick = (componentName: TComponentName) =>
    dispatch(openModal(componentName));

  if (!ComponentToRender) return null;

  return (
    <S.Wrapper
      bgColor={bgColor}
      onClick={() => handleClick(exhibit.componentName)}
    >
      <S.Content>
        <ComponentToRender {...exhibit.props} />
      </S.Content>
    </S.Wrapper>
  );
};

export default Showcase;
