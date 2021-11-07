import axios from "axios";

const API = axios.create( {baseURL: 'http://localhost:5000'})

/*API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    };

    return req;
})*/


API.interceptors.request.use((req) => {
    console.log(localStorage.getItem('profile'))
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchRecipes = () => API.get('/recipes');

export const createRecipe =(newRecipe)=> API.post('/recipes', newRecipe);

export const updateRecipe = (id, updatedrecipe)=>API.patch(`/recipes/${id}`, updatedrecipe);

export const deleteRecipe = (id)=> API.delete(`/recipes/${id}`, deleteRecipe);

export const likeRecipe = (id, updatedrecipe)=>API.patch(`/recipes/${id}/likeRecipe`, updatedrecipe);

export const signIn = (FormData) => API.post('/users/signin', FormData);

export const signUp = (FormData) => API.post('/users/signup', FormData);