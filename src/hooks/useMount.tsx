import React from 'react';

export const useMount = (function_: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(function_, []);
};

// Need this hook for future steps
