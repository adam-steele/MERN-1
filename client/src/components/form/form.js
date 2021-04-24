import React, {useState} from "react";

import useStyles from "./styles";
import { TextField, Button, Typography, Paper, } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../actions/recipes.js";


const Form = () => {
    const [recipeData, setRecipeData] = useState({
        creator: '', 
        title: '', 
        time: '',
        servings: 0,
        summary: '',
        selectedFile:'',
      })
            
          /*
          ingreds: [
            {
              name: '',
              amount: 0 ,
              unit: '',
            },
          ],
      
          tips: [],
      
          steps: [],
      
          source: {
            link: '',
            description: '',
          },*/

    
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
      e.preventDefault();

      dispatch(createRecipe(recipeData));
    };
    const clear = ()=>{};

    return(
        <Paper className={classes.paper}>
          <Typography variant="h6"> Upload A Recipe</Typography>

            
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={recipeData.creator}
                onChange={(e)=> setRecipeData({...recipeData, creator: e.target.value})}
                />

                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={recipeData.title}
                onChange={(e)=> setRecipeData({...recipeData, title: e.target.value})}
                />

                <TextField 
                name="time" 
                variant="outlined" 
                label="Time" 
                fullWidth
                value={recipeData.time}
                onChange={(e)=> setRecipeData({...recipeData, time: e.target.value})}
                />

                <TextField 
                name="servings" 
                type="number"
                variant="outlined" 
                label="Servings" 
                fullWidth
                value={recipeData.servings}
                onChange={(e)=> setRecipeData({...recipeData, servings: e.target.value})}
                />

                <TextField 
                name="summary" 
                variant="outlined" 
                label="Summary" 
                multiline
                rows={4}
                fullWidth
                value={recipeData.summary}
                onChange={(e)=> setRecipeData({...recipeData, summary: e.target.value})}
                />

                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        fullWidth
                        onDone={({base64})=>setRecipeData({...recipeData, selectedFile: base64})}
                /></div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                    
            </form>
        </Paper>
    );
}

export default Form;

