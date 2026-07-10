import { Navigate, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Login from '@/pages/Login';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Dashboard from '@/pages/Dashboard';
import Customers from '@/pages/Customers';
import LoanApplications from '@/pages/LoanApplications';
import Banks from '@/pages/Banks';
import Partners from '@/pages/Partners';
import Blog from '@/pages/Blog';
import Documents from '@/pages/Documents';
import Automation from '@/pages/Automation';
import Notifications from '@/pages/Notifications';
import AuditLogs from '@/pages/AuditLogs';
import Support from '@/pages/Support';
import Settings from '@/pages/Settings';
import Users from '@/pages/Users';
import Reports from '@/pages/Reports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="loan-applications" element={<LoanApplications />} />
        <Route path="banks" element={<Banks />} />
        <Route path="partners" element={<Partners />} />
        <Route path="blog" element={<Blog />} />
        <Route path="documents" element={<Documents />} />
        <Route path="automation" element={<Automation />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="audit-logs" element={<AuditLogs />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
