import { useCallback, useEffect, useRef } from "react";

export default function useEventListener(name: string, cb: EventListenerOrEventListenerObject, element: HTMLElement | Window | null = window) {
  useEffect(() => {
    if (!element) {
      return undefined;
    }
    element.addEventListener(name, cb);
    return () => {
      element.removeEventListener(name, cb);
    };
  }, [cb, element, name]);
}

export function useDebounceCallback(cb: Function, ms?: number) {
  const ref = useRef<NodeJS.Timeout | null>(null);
  const savedCb = useRef<Function | null>(null);

  useEffect(() => {
    console.log('updating ref');
    savedCb.current = cb;
  }, [cb]);

  return useCallback(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => savedCb?.current?.(), ms ?? 200);
  }, [ms]);
}
