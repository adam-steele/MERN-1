/*import React, {useState} from "react";


import { TextField, Button } from "@material-ui/core";
import { useSelector } from "react-redux";


const Steps = ({currentId}) => {

    const steps =  useState({
        steps: '',
      })

    const recipe = useSelector((state)=> currentId ? state.recipes.find((r)=>r._id ===currentId) :null)

return(
    <div>
        {recipe.steps.map((step, idx)=>(
            <div>
            <TextField key={idx} step={step} xs={12} sm={6}/>
            <Button></Button>
            </div>
        ))}
    </div>
);
  }

  export default Steps;*/


  import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function Steps() {
  const [recipeData, setRecipeData,] = useState([{ steps:'' }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...recipeData];
    list[index][name] = value;
    setRecipeData(list);
  };


  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...recipeData.steps];
    list.splice(index, 1);
    setRecipeData(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setRecipeData([...recipeData, { steps:"" }]);
  };

  return (
    <div className="App">
      
      {/*recipeData.steps.map((x, i) => {
        return (
          <div className="box">
            <TextField
              name="steps"
              placeholder="A"
              value={x.steps}
              onChange={e => handleInputChange(e, i)}
            />
            
            <div className="btn-box">
              {recipeData.steps.length !== 1 && <Button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</Button>}
              {recipeData.steps.length - 1 === i && <Button onClick={handleAddClick}>Add</Button>}
            </div>
          </div>
        );
      })*/}
      <div style={{ marginTop: 20 }}>{JSON.stringify(recipeData)}</div>
    </div>
  );
}

export default Steps;