import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import LayOut from './view/LayOut';
import preloadPage from './helpers/preloadPage';

const PhoneBook = preloadPage('PhoneBook');

const Todos = lazy(() => import('./view/Todos'));
const HomeView = lazy(() => import('./view/HomeView'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomeView />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/book" element={<PhoneBook />} />
        </Route>
      </Routes>
    </>
  );
};
