import express from 'express';
import { addHistorique, getHistoriqueByUsername } from '../controllers/historiqueController.js';  // Ensure correct path to your controller file

const router = express.Router();

// Route to handle POST requests to add a new historique entry
router.post('/', addHistorique);

// Route to handle GET requests to find historique by username
router.get('/:username', getHistoriqueByUsername);

export default router;
