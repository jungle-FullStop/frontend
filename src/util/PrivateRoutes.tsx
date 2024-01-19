import { Outlet, Navigate } from 'react-router-dom';
import { PAGE_URL } from '@util/constants';

const PrivateRoutes = () => {
  const isLogin =
    localStorage.getItem('userId') && localStorage.getItem('userId') !== 'undefined' ? true : false;
  return isLogin ? <Outlet /> : <Navigate to={PAGE_URL.LOGIN} />;
};

export default PrivateRoutes;
