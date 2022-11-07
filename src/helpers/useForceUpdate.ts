import { useState, useCallback } from 'react';

export const useForceUpdate = () => {
  const [, setValue] = useState(0);
  return useCallback(() => setValue((s) => s + 1), []);
};
