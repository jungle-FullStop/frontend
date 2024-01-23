import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '@pages/Landing';
import Home from '@pages/Home';
import Loading from '@pages/Loading';
import EDIT from '@pages/Edit';
import NotFound from '@pages/NotFound';

import PrivateRoutes from '@util/PrivateRoutes';
import AuthRoutes from '@util/AuthRoutes';
import AuthLogin from '@pages/OAuthLogin.tsx';
import { PAGE_URL } from '@/util/Constants/constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${PAGE_URL.LANDING}`} element={<Landing />} />
        <Route element={<PrivateRoutes />}>
          <Route path={`${PAGE_URL.LOADING}`} element={<Loading />} />
          <Route path={`${PAGE_URL.HOME}`} element={<Home />} />
          <Route path={`${PAGE_URL.EDIT}`} element={<EDIT />} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path={`${PAGE_URL.AUTH}`} element={<AuthLogin />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
