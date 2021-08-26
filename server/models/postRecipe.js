import mongoose from "mongoose";

const postRecipeSchema = mongoose.Schema ({
    creator: String,
    title: String,
    time: String,
    servings: String,
    summary: String,
    selectedFile: String,
    createdAt:{
      type: Date,
      default: new Date()
  },

  likes:{
    type:[String],
    default: [],
  },

    /*pictures: [
      {
        selectedFile: String,
        caption: String,
      }
    ], */

    ingreds: [
      {
        name: String,
        amount: Number,
        unit: String,
      },
    ], 

    tips: [String],

    steps: [String],

    /*source: {
      link: String,
      description: String,
    },*/


  });

  const PostRecipe = mongoose.model('postRecipe', postRecipeSchema);

  export default PostRecipe;

