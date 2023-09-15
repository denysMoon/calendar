import React, { Suspense } from 'react';
import Loader from '../../components/Loader';

// Temp. For now Calendar won't be a page. Suspense the same.

const Calendar = React.lazy(() => import('../../components/Calendar'));

export const Main: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Calendar />
    </Suspense>
  );
};
