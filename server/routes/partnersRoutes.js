import { Router } from 'express';
import { createListController } from '../controllers/placeholderController.js';
import { authorizeRoles, protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.use(protect, authorizeRoles('admin', 'superadmin'));
router.get('/', createListController('Partners'));

export default router;
