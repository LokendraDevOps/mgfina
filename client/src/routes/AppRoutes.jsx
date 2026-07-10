import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/components/layout/PublicLayout';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Services from '@/pages/Services';
import LoanProducts from '@/pages/LoanProducts';
import ApplyLoan from '@/pages/ApplyLoan';
import Eligibility from '@/pages/Eligibility';
import EmiCalculator from '@/pages/EmiCalculator';
import Blogs from '@/pages/Blogs';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="loan-products" element={<LoanProducts />} />
        <Route path="apply-loan" element={<ApplyLoan />} />
        <Route path="eligibility" element={<Eligibility />} />
        <Route path="emi-calculator" element={<EmiCalculator />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="secure" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
