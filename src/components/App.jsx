import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const LazyContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<LazyContactsPage />} />
          <Route path="*" element={<Navigate to="contacts" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
