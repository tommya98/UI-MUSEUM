import componentsWithMetaData, {
  TComponentName,
  componentMapper,
} from "../exhibits";

const getComponentInfo = (componentName: TComponentName | null) => {
  const targetComponentWithMetaData = componentsWithMetaData.find((obj) => {
    return obj.componentName === componentName;
  });
  if (!targetComponentWithMetaData)
    return {
      ComponentToRender: null,
      title: "",
      date: "",
      description: "",
      url: "",
      props: {},
    };

  const ComponentToRender =
    componentMapper[targetComponentWithMetaData.componentName];
  const props = targetComponentWithMetaData.props;
  const { title, date, description, url } =
    targetComponentWithMetaData.metaData;

  return {
    ComponentToRender,
    title,
    date,
    description,
    url,
    props,
  };
};

export default getComponentInfo;
