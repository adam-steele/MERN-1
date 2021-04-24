import PostRecipe from "../models/postRecipe.js";



export const getRecipes = async (req,res)=>{
    try {
        const postRecipes = await PostRecipe.find()
        console.log(postRecipes);
        res.status(200).json(postRecipes);
    } catch (error) {
        res.status(404).json({message:error.message});
    }

}

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

}

/*export const createRecipe = async (req, res) => {
    const { title, time, selectedFile, summary, servings } = req.body;

    const newRecipe = new postRecipe({ title, time, selectedFile, summary, servings } )

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}*/


