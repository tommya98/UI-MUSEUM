import componentsWithMetaData, {
  TComponentName,
  componentMapper,
} from "../exhibits";

const defaultValue = {
  ComponentToRender: null,
  title: "",
  date: "",
  description: "",
  url: "",
  props: {},
};

const getComponentInfo = (componentName: TComponentName | null) => {
  const targetComponent = componentsWithMetaData.find(
    (obj) => obj.componentName === componentName
  );
  if (!targetComponent) return defaultValue;

  const ComponentToRender = componentMapper[targetComponent.componentName];
  const { props, metaData } = targetComponent;

  return {
    ComponentToRender,
    ...metaData,
    props,
  };
};

export default getComponentInfo;
