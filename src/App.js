import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import NewRecipe from './NewRecipe'
import recipeData from './recipes'

function App() {
  const [recipes, setRecipes] = useState([])
	const [showForm, setShowForm] = useState(null)

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

	const showNewForm = () => {
		setShowForm(true)
	}

	const showAllRecipes = () => {
		setShowForm(false)
	}

	const addRecipe = (newRecipeObj) => {
		recipes.push(newRecipeObj)
		setRecipes(recipes)
		showAllRecipes()
	}

	const deleteRecipe = (recipeId) => {
		recipes.splice(recipeId, 1)
		console.log(recipes);
		setRecipes(recipes)
	}

  return (
    <div className="App">
      <NavBar
				showNewForm={showNewForm}
				showAllRecipes={showAllRecipes}/>
			{showForm ? <NewRecipe addRecipe={addRecipe}/> : <RecipeIndex recipes={recipes} deleteRecipe={deleteRecipe} />}
    </div>
  );
}

export default App;
