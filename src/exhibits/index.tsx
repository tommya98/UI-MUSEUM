import React, { ReactNode } from "react";

import componentsWithMetaData from "./data";

const exhibits: ReactNode[] = [];

componentsWithMetaData.forEach(({ component, props, metaData }) => {
  exhibits.push(React.createElement(component, { ...props, ...metaData }));
});

export default exhibits;
