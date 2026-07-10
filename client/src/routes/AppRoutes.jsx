import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from '@/components/layout/PublicLayout';
import Home from '@/pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
