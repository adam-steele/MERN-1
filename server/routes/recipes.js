import express from "express";
import { getRecipes, createRecipe, updateRecipe, deleteRecipe, likeRecipe } from "../controllers/recipes.js";
//import auth from "../middleware/auth.js";


const router = express.Router();


router.get('/', getRecipes);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);
router.patch('/:id/likeRecipe', likeRecipe);

export default router;

