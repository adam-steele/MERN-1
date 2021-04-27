import axios from "axios";

const url = 'http://localhost:5000/recipes'

export const fetchRecipes = () => axios.get(url);

export const createRecipe =(newRecipe)=> axios.post(url, newRecipe);

export const updateRecipe = (id, updatedrecipe)=>axios.patch(`${url}/${id}`, updatedrecipe);

export const deleteRecipe = (id)=> axios.delete(`${url}/${id}`, deleteRecipe);

export const likeRecipe = (id, updatedrecipe)=>axios.patch(`${url}/${id}/likeRecipe`, updatedrecipe);