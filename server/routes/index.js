import { Router } from 'express';
import authRoutes from './authRoutes.js';
import adminRoutes from './adminRoutes.js';
import customersRoutes from './customersRoutes.js';
import loanApplicationsRoutes from './loanApplicationsRoutes.js';
import blogsRoutes from './blogsRoutes.js';
import settingsRoutes from './settingsRoutes.js';
import banksRoutes from './banksRoutes.js';
import partnersRoutes from './partnersRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/customers', customersRoutes);
router.use('/loan-applications', loanApplicationsRoutes);
router.use('/blogs', blogsRoutes);
router.use('/settings', settingsRoutes);
router.use('/banks', banksRoutes);
router.use('/partners', partnersRoutes);

export default router;
