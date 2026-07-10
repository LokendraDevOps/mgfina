import { Navigate, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Customers from '@/pages/Customers';
import LoanApplications from '@/pages/LoanApplications';
import Banks from '@/pages/Banks';
import Partners from '@/pages/Partners';
import Blog from '@/pages/Blog';
import Settings from '@/pages/Settings';
import Users from '@/pages/Users';
import Reports from '@/pages/Reports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="loan-applications" element={<LoanApplications />} />
        <Route path="banks" element={<Banks />} />
        <Route path="partners" element={<Partners />} />
        <Route path="blog" element={<Blog />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
