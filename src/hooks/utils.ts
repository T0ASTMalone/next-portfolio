import { useEffect } from "react";

export default function useEventListener(name: string, cb: EventListenerOrEventListenerObject, element: HTMLElement | Window | null = window) {
  useEffect(() => {
    if (!element) {
      console.log('returning');
      return undefined;
    }

    console.log('setting event listner');
    element.addEventListener(name, cb);
    return () => {
      element.removeEventListener(name, cb);
    };
  }, [cb, element, name]);
}
