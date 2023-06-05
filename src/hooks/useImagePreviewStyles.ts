import { useMemo } from "react";

export function useImagePreviewStyles(len: number): [number, number[]] {
  const width = useMemo(() => (100 / len), [len]);
  const positions = useMemo(() => {
    const arr = [0];

    if (len > 2) {
      const percent = (100 / (len - 1));
      
      for (let i = 1; i < len - 1; ++i) {
        arr.push(percent * i);
      }
    }

    arr.push(100);
    return arr;
  }, [len]);

  return [width, positions];
}
