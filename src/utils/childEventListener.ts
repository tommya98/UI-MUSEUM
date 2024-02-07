type TAction = "add" | "remove";

interface IEventProps {
  eventType: keyof HTMLElementEventMap;
  handler: EventListener;
}

const applyEventToChild = (
  child: HTMLElement,
  action: TAction,
  { eventType, handler }: IEventProps
) => {
  action === "add"
    ? child.addEventListener(eventType, handler)
    : child.removeEventListener(eventType, handler);
};

const makeChildEventListeners =
  (action: TAction, eventList: IEventProps[]) => (elements: HTMLElement[]) => {
    elements.forEach((element) => {
      const childs = Array.from(element.children) as HTMLElement[];
      childs.forEach((child) => {
        eventList.forEach((eventProps) =>
          applyEventToChild(child, action, eventProps)
        );
      });
    });
  };

const childEventLister = (eventList: IEventProps[]) => {
  const addChildEvents = makeChildEventListeners("add", eventList);
  const removeChildEvents = makeChildEventListeners("remove", eventList);

  return { addChildEvents, removeChildEvents };
};

export default childEventLister;
