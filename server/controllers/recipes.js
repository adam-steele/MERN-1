import  mongoose  from "mongoose";
import PostRecipe from "../models/postRecipe.js";



export const getRecipes = async (req,res)=>{
    try {
        const postRecipes = await PostRecipe.find()
        console.log(postRecipes);
        res.status(200).json(postRecipes);
    } catch (error) {
        res.status(404).json({message:error.message});
    }

};

export const createRecipe = async(req,res)=>{
    //const { title, message, selectedFile, creator, tags } = req.body;

    //const newRecipe = new PostRecipe({ title, message, selectedFile, creator, tags })
    const recipe = req.body;
    const newRecipe = new PostRecipe(recipe);
    
    try {
       await newRecipe.save();
       res.status(201).json(newRecipe);
   } catch (error) {
       res.status(409).json({message:error.message});
   }

};

export const updateRecipe = async(req,res)=>{
    const {id: _id} = req.params;
    const recipe = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send("No post with that id");
    }

    const updatedRecipe = await PostRecipe.findByIdAndUpdate(_id,{...recipe, _id},{new:true})
    res.json(updatedRecipe);
}

export const deleteRecipe = async(req,res)=>{
    const {id} = req.params;
    const recipe = req.body;



    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send("No post with that id");
    }

    const deleteRecipe = await PostRecipe.findByIdAndRemove(id)
    res.json({message : 'deleted Recipe successfully'});
}

export const likeRecipe = async(req,res)=>{
    const {id} = req.params;
    
    if(!req.userId) return res.json({message:"Unathenticated"})

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send("No post with that id");
    }

    const recipe = await PostRecipe.findById(id);

    const  index = recipe.likes.findIndex((id)=> id === String(req.userId));

    if (index === -1){
        recipe.likes.push(userId);
    } else {
        recipe.likes.filter((id)=> id !== String(req.userId))
    }

    const updatedRecipe = await PostRecipe.findByIdAndUpdate(id, recipe ,{new:true})
    res.json(updatedRecipe);
}
