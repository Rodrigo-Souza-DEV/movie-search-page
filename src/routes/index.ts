import { Router } from "express";
import * as pageController from "../controllers/pageController";
import * as searchController from "../controllers/searchController";

const router = Router();

router.get('/',pageController.home);
router.get('/action',pageController.action);
router.get('/drama',pageController.drama);
router.get('/comedy',pageController.comedy);
router.get('/romance',pageController.romance);
router.get('/horror',pageController.horror);

router.get('/search',searchController.search);

export default router;