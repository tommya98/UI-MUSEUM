interface IEventProps {
  eventType: keyof HTMLElementEventMap;
  handler: EventListener;
}

const addChildEventListener = (eventList: IEventProps[]) => {
  const addChildEvents = (elements: HTMLElement[]) => {
    elements.forEach((element) => {
      const children = Array.from(element.children) as HTMLElement[];
      children.forEach((child) => {
        eventList.forEach(({ eventType, handler }) =>
          child.addEventListener(eventType, handler)
        );
      });
    });
  };

  const removeChildEvents = (elements: HTMLElement[]) => {
    elements.forEach((element) => {
      const children = Array.from(element.children) as HTMLElement[];
      children.forEach((child) => {
        eventList.forEach(({ eventType, handler }) =>
          child.removeEventListener(eventType, handler)
        );
      });
    });
  };

  return { addChildEvents, removeChildEvents };
};

export default addChildEventListener;
